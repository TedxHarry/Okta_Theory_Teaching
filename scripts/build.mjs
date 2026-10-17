import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import MarkdownIt from "markdown-it";
import GithubSlugger from "github-slugger";
import { loadQuiz, renderQuiz, quizSearchText } from "./quizzes.mjs";

const base = "/Okta_Theory_Teaching/",
  out = path.resolve("docs");
const escape = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const hash = (s) => crypto.createHash("sha256").update(s.trim()).digest("hex");
const design = JSON.parse(fs.readFileSync("DESIGN.md", "utf8").split("---")[1]);
const diagrams = JSON.parse(
  fs.readFileSync("site/diagrams/manifest.json", "utf8"),
);
const version = hash(
  ["style.css", "app.js", "quiz.js"]
    .map((f) => fs.readFileSync("site/" + f, "utf8"))
    .join("") + JSON.stringify(design),
).slice(0, 12);
export function stripFrontmatter(text) {
  return text
    .replaceAll("\r\n", "\n")
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .trim();
}
const files = ["index.md", "overview.md", "learning-path.md"];
function collect(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = dir + "/" + entry.name;
    if (entry.isDirectory()) collect(file);
    else if (file.endsWith(".md")) files.push(file);
  }
}
for (const folder of [
  "lessons",
  "question-bank",
  "exercises",
  "self-checks",
  "revision",
  "assessments",
  "requests",
  "reference",
  "notebook",
])
  collect(folder);
const kindFor = {
  lessons: "Lesson",
  "question-bank": "Questions",
  exercises: "Exercises",
  "self-checks": "Self-check",
  revision: "Recap",
  assessments: "Assessment",
  requests: "Request",
  reference: "Reference",
  notebook: "Notebook",
};
const documents = files.map((source) => {
  const text = stripFrontmatter(fs.readFileSync(source, "utf8"));
  const title = text.match(/^# (.+)$/m)?.[1].replaceAll("`", "") || source;
  const number = Number(source.match(/day-(\d+)/)?.[1]) || undefined;
  const route =
    source === "index.md"
      ? ""
      : source.endsWith("/index.md")
        ? source.slice(0, -8)
        : source.replace(/\.md$/, ".html");
  const kind = kindFor[source.split("/")[0]] || "Course guide";
  return {
    source,
    route,
    title,
    number,
    kind,
    text,
    description: `${title}. Okta workforce identity theory and reasoning practice.`,
  };
});
const lessons = documents
  .filter((d) => d.kind === "Lesson" && d.number)
  .sort((a, b) => a.number - b.number);
const questions = documents
  .filter((d) => d.kind === "Questions" && d.number)
  .sort((a, b) => a.number - b.number);
for (const lesson of lessons) {
  const number = String(lesson.number).padStart(2, "0"),
    source = `quizzes/day-${number}.json`;
  const data = loadQuiz(source, lesson.number);
  documents.push({
    source,
    route: `quizzes/day-${number}.html`,
    kind: "Quizzes",
    number: lesson.number,
    title: `Day ${lesson.number}: Quizzes`,
    description: `Independent practice for ${lesson.title}.`,
    data,
    text: quizSearchText(data),
  });
}
const quizzes = documents.filter((d) => d.kind === "Quizzes");
for (const d of quizzes) {
  const lesson = lessons[d.number - 1];
  const headings = [...lesson.text.matchAll(/^## (.+)$/gm)].map(
    (match) => match[1],
  );
  const slugger = new GithubSlugger();
  const anchors = new Map(
    headings.map((heading) => [heading, slugger.slug(heading)]),
  );
  for (const q of d.data.questions) {
    if (!q.review || !anchors.has(q.review.heading))
      throw new Error(`Missing concept review for ${q.id}`);
    q.review = {
      title: q.review.heading,
      url: base + lesson.route + "#" + anchors.get(q.review.heading),
    };
  }
  d.data.revision = hash(JSON.stringify(d.data));
}
for (const [lastDay, sampleSize, label] of [
  [5, 10, "Foundation"],
  [10, 10, "Integration"],
  [15, 15, "Engineering"],
]) {
  const pool = quizzes
    .filter((d) => d.number <= lastDay)
    .flatMap((d) => d.data.questions);
  documents.push({
    source: `mixed/${lastDay}`,
    route: `quizzes/mixed-${lastDay}.html`,
    title: `${label} mixed review: Days 1 to ${lastDay}`,
    kind: "Mixed review",
    description: `Draw a balanced ${sampleSize}-question review across the first ${lastDay} days.`,
    text: pool.map((q) => q.prompt).join(" "),
    data: {
      schemaVersion: 1,
      lesson: 0,
      mode: "mixed",
      lastDay,
      sampleSize,
      questions: pool,
    },
  });
}
const bySource = new Map(documents.map((d) => [d.source, d]));
const countQuestions = (d) =>
  (d.text.match(/class="qb-question"/g) || []).length;
function link(target, current) {
  if (/^(https?:|mailto:|#)/.test(target)) return target;
  const [file, fragment] = target.split("#");
  const source = path.posix.normalize(
    path.posix.join(path.posix.dirname(current), file),
  );
  const d =
    bySource.get(source) ||
    bySource.get(source.replace(/\.html$/, ".md")) ||
    documents.find((document) => document.route === source);
  if (!d) throw new Error(`Unmapped link ${current} -> ${target}`);
  return base + d.route + (fragment ? "#" + fragment : "");
}
function render(d) {
  const md = new MarkdownIt({ html: true, typographer: false });
  const tokens = md.parse(d.text, {}),
    slugger = new GithubSlugger();
  let diagramNumber = 0;
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type === "heading_open")
      t.attrSet(
        "id",
        slugger.slug(tokens[i + 1].children.map((c) => c.content).join("")),
      );
    if (t.type === "inline")
      for (const c of t.children || [])
        if (c.type === "link_open")
          c.attrSet("href", link(c.attrGet("href"), d.source));
  }
  md.renderer.rules.table_open = () =>
    '<div class="table-scroll" role="region" aria-label="Comparison table" tabindex="0"><table>';
  md.renderer.rules.table_close = () => "</table></div>";
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (ts, i, opts, env, self) => {
    const t = ts[i];
    if (t.info.trim() !== "mermaid")
      return fence(ts, i, opts, env, self).replace(
        "<pre>",
        '<pre tabindex="0" role="region" aria-label="Code example">',
      );
    const entry = diagrams[hash(t.content)];
    if (!entry) throw new Error(`Refresh diagram in ${d.source}`);
    const file = base + "assets/diagrams/" + entry.file,
      label = `${d.title}: diagram ${++diagramNumber}`;
    const svg = fs.readFileSync("site/diagrams/" + entry.file, "utf8"),
      box = svg.match(/viewBox="[^"]*?([\d.]+) ([\d.]+)"/);
    return `<figure class="diagram"><img src="${file}" alt="${escape(label)}"${box ? ` width="${Math.ceil(Number(box[1]))}" height="${Math.ceil(Number(box[2]))}"` : ""} loading="lazy"><figcaption><span>${escape(label)}</span><a href="${file}" data-diagram="${escape(label)}">Open full diagram</a></figcaption></figure>`;
  };
  return md.renderer.render(tokens, md.options, {});
}
fs.mkdirSync(out + "/assets", { recursive: true });
for (const folder of ["fonts", "diagrams"])
  fs.cpSync("site/" + folder, out + "/assets/" + folder, { recursive: true });
for (const file of ["style.css", "app.js", "quiz.js"])
  fs.copyFileSync("site/" + file, out + "/assets/" + file);
fs.writeFileSync(
  out + "/assets/tokens.css",
  `:root{${Object.entries(design.colors)
    .map(([k, v]) => `--${k}:${v};`)
    .join(
      "",
    )}--sans:${design.typography.sans.fontFamily};--serif:${design.typography.serif.fontFamily};--mono:${design.typography.mono.fontFamily};--radius:${design.rounded.DEFAULT};--radius-sm:${design.rounded.sm};--radius-lg:${design.rounded.lg};--page-max:${design.spacing["page-max"]};--border:color-mix(in srgb,var(--ink) 15%,white);}`,
);
function shell(d, body) {
  const route = d.route,
    active = (r) => (route === r ? ' aria-current="page"' : "");
  const nav = lessons
    .map(
      (l) =>
        `<li><a href="${base + l.route}"${d.number === l.number ? ' aria-current="page"' : ""}><span class="lesson-number">${String(l.number).padStart(2, "0")}</span><span>${escape(l.title.replace(/^Day \d+: /, ""))}${l.number === 16 ? " (optional)" : ""}</span></a></li>`,
    )
    .join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escape(d.description || d.title)}"><meta name="color-scheme" content="light"><title>${escape(d.title)} | Okta Theory Teaching</title><link rel="canonical" href="https://tedxharry.github.io${base + route}"><link rel="icon" href="${base}assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="${base}assets/tokens.css?v=${version}"><link rel="stylesheet" href="${base}assets/style.css?v=${version}"><script src="${base}assets/app.js?v=${version}" defer></script>${d.data ? `<script type="module" src="${base}assets/quiz.js?v=${version}"></script>` : ""}</head><body><a class="skip" href="#main">Skip to content</a><header class="topbar"><a class="brand" href="${base}"><span class="brand-mark" aria-hidden="true"></span>Okta Theory</a><nav class="toplinks" aria-label="Primary"><a href="${base}"${active("")}>Course</a><a href="${base}reference/"${route.startsWith("reference/") ? ' aria-current="page"' : ""}>Reference</a><a href="${base}search/"${active("search/")}>Search</a><a class="repo-link" href="https://github.com/TedxHarry/Okta_Theory_Teaching">GitHub ↗</a></nav></header><div class="shell"><aside class="sidebar"><details class="course-menu" open><summary title="Expand or collapse lessons"><span class="menu-icon" aria-hidden="true">☰</span><span class="menu-label">Browse lessons</span></summary><p class="nav-label">Okta workforce identity</p><nav aria-label="Lessons"><ol class="lesson-nav">${nav}</ol></nav><a class="side-ref" href="${base}learning-path.html">Learning path →</a><a class="side-ref" href="${base}reference/">Reference library →</a></details></aside><main class="main" id="main">${body}<footer class="page-footer">Okta workforce identity · <a href="${base}assessments/">Checkpoints and final case</a> · <a href="https://github.com/TedxHarry/Okta_Theory_Teaching">Course source</a></footer></main></div><dialog id="diagram-dialog" aria-labelledby="diagram-title"><div class="dialog-head"><h2 id="diagram-title">Full diagram</h2><form method="dialog" novalidate><button type="submit" id="close-diagram">Close diagram</button></form></div><div class="diagram-scroll"><img id="full-diagram" alt=""></div></dialog></body></html>`;
}
function write(route, html) {
  const file = path.join(
    out,
    route.endsWith(".html") ? route : route + "index.html",
  );
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}
for (const d of documents) {
  const n = d.number;
  const modes = n
    ? `<nav class="reading-modes" aria-label="Lesson material"><a href="${base + lessons[n - 1].route}"${d.kind === "Lesson" ? ' aria-current="page"' : ""}>Lesson ${n}</a><a href="${base + questions[n - 1].route}"${d.kind === "Questions" ? ' aria-current="page"' : ""}>Questions (${countQuestions(questions[n - 1])})</a><a href="${base + quizzes[n - 1].route}"${d.kind === "Quizzes" ? ' aria-current="page"' : ""}>Quizzes (${quizzes[n - 1].data.questions.length})</a></nav>`
    : "";
  const tools = n
    ? `<aside class="learning-links" aria-label="More study material"><strong>Study tools${n === 16 ? " · Optional practice bridge" : ""}</strong>${[
        "exercises",
        "self-checks",
        "revision",
      ]
        .map((folder) =>
          bySource.get(`${folder}/day-${String(n).padStart(2, "0")}.md`),
        )
        .filter(Boolean)
        .map((x) => `<a href="${base + x.route}">${escape(x.kind)}</a>`)
        .join(
          "",
        )}<a href="${base}assessments/">Checkpoints and final case</a><a href="${base}requests/">Working through requests</a></aside>`
    : "";
  const checkpoint = [5, 10, 15].includes(n)
    ? `<aside class="checkpoint-callout" aria-label="Learning checkpoint"><h2>${n === 5 ? "Check your foundations" : n === 10 ? "Connect sign-in and account management" : "Defend an engineering investigation"}</h2><p>Attempt the evidence and explain your reasoning before opening the model answers. Use the debrief to identify what you can explain independently and what needs another look.</p><a href="${base}assessments/${n === 5 ? "foundation" : n === 10 ? "integration" : "final-case"}.html">${n === 15 ? "Open the final case" : "Open the checkpoint"}</a> · <a href="${base}quizzes/mixed-${n}.html">Try mixed review</a> · <a href="${base}assessments/self-checks/${n === 5 ? "foundation" : n === 10 ? "integration" : "final-case"}.html">Debrief and skills checklist</a></aside>`
    : "";
  const guides = n
    ? `<aside class="learning-links" aria-label="Evidence and investigation guides"><strong>Connect the concepts</strong><a href="${base}reference/annotated-evidence.html">Annotated evidence</a><a href="${base}reference/settings-to-outcomes.html">Settings to outcomes</a><a href="${base}reference/troubleshooting-comparisons.html">Compare investigations</a><a href="${base}quizzes/mixed-${n <= 5 ? 5 : n <= 10 ? 10 : 15}.html">Mixed review</a></aside>`
    : "";
  const next = n
    ? `<nav class="page-navigation" aria-label="Lesson sequence">${n > 1 ? `<a href="${base + lessons[n - 2].route}"><small>← Previous lesson</small>${escape(lessons[n - 2].title)}</a>` : "<span></span>"}${n < lessons.length ? `<a href="${base + lessons[n].route}"><small>${n === 15 ? "Optional practice →" : "Next lesson →"}</small>${escape(lessons[n].title)}</a>` : `<a href="${base}reference/">Reference library →</a>`}</nav>`
    : "";
  let html = d.data ? renderQuiz(d.data, d.title) : render(d);
  if (d.route === "")
    html =
      html.replace(
        "</h1>",
        `</h1><p><a class="primary-link" href="${base + lessons[0].route}">Start with Lesson 1 →</a></p>`,
      ) +
      `<section class="course-list" aria-label="All lessons">${lessons.map((l) => `<a class="course-row" href="${base + l.route}"><span class="num">${String(l.number).padStart(2, "0")}</span><span><strong>${escape(l.title)}</strong></span><span class="row-arrow" aria-hidden="true">→</span></a>`).join("")}</section>`;
  write(
    d.route,
    shell(
      d,
      `<div class="reading-layout"><section>${modes}<article class="prose ${d.data ? "quiz-page" : d.kind === "Questions" ? "questions-page" : "lesson-page"}">${html}</article>${checkpoint}${tools}${guides}${next}</section></div>`,
    ),
  );
}
const index = documents.map((d) => ({
  title: d.title,
  kind: d.kind,
  url: base + d.route,
  description: d.description,
  text: d.text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " "),
}));
const plain = (text) =>
  text
    .replace(/<[^>]*>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
for (const d of questions) {
  for (const match of d.text.matchAll(
    /<a id="(q\d+)"><\/a>[\s\S]*?<p class="qb-question">([\s\S]*?)<\/p>/g,
  )) {
    const text = plain(match[2]);
    index.push({
      title: `Day ${d.number} ${match[1].toUpperCase()}: ${text.slice(0, 85)}`,
      kind: "Question",
      question: true,
      url: base + d.route + "#" + match[1],
      description: text.slice(0, 180),
      text,
    });
  }
}
for (const d of quizzes)
  for (const q of d.data.questions)
    index.push({
      title: `Day ${d.number} quiz: ${q.topic}`,
      kind: "Quiz question",
      question: true,
      url: base + d.route + "#" + q.id,
      description: q.prompt,
      text: `${q.id} ${q.prompt} ${(q.evidence || []).join(" ")}`,
    });
write(
  "search/",
  shell(
    { title: "Search the course", route: "search/" },
    `<div class="home"><div class="prose"><h1>Search the course</h1><p>Find lessons, questions, quizzes, recaps and reference material.</p></div><label for="course-search" class="search-label">Search terms</label><div class="search-controls"><input type="search" id="course-search" autocomplete="off" placeholder="Search Okta concepts"><button id="clear-search" type="button" onclick="document.querySelector('#course-search').value='';document.querySelector('#course-search').dispatchEvent(new Event('input'));document.querySelector('#course-search').focus()" hidden>Clear search</button></div><p id="search-count" role="status">Browse all ${documents.length} course pages below.</p><div id="no-results" class="empty" hidden>No matching pages. Try a shorter term.</div><ul id="search-results" class="search-results">${index
      .filter((d) => !d.question)
      .map(
        (d) =>
          `<li><small>${d.kind}</small><a href="${d.url}">${escape(d.title)}</a><p>${escape(d.description)}</p></li>`,
      )
      .join(
        "",
      )}</ul><script type="application/json" id="search-data">${JSON.stringify(index).replaceAll("<", "\\u003c")}</script><noscript><p>Search filtering needs JavaScript. All course links remain available above.</p></noscript></div>`,
  ),
);
write(
  "404.html",
  shell(
    { title: "Page not found", route: "404.html" },
    `<div class="home prose"><h1>Let’s get you back to the course.</h1><p>This address does not point to a course page.</p><p><a href="${base}">Open the course</a> · <a href="${base}search/">Search the course</a></p></div>`,
  ),
);
fs.writeFileSync(out + "/.nojekyll", "");
fs.writeFileSync(
  out + "/assets/favicon.svg",
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#245bc4"/><circle cx="18" cy="18" r="10" fill="none" stroke="white" stroke-width="3"/><circle cx="29" cy="29" r="5" fill="#14746f" stroke="white" stroke-width="2"/></svg>',
);
fs.writeFileSync(
  out + "/sitemap.xml",
  `<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...documents.map((d) => d.route), "search/"].map((r) => `<url><loc>https://tedxharry.github.io${base + r}</loc></url>`).join("")}</urlset>`,
);
fs.writeFileSync(
  out + "/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: https://tedxharry.github.io${base}sitemap.xml\n`,
);
fs.writeFileSync(
  out + "/build-manifest.json",
  JSON.stringify(
    {
      base,
      documents: documents.map(({ text, data, ...d }) => ({
        ...d,
        questions:
          d.kind === "Questions"
            ? countQuestions(bySource.get(d.source))
            : undefined,
        quizzes: d.kind === "Quizzes" ? data.questions.length : undefined,
        reviewPool:
          d.kind === "Mixed review" ? data.questions.length : undefined,
      })),
      diagramPlacements: documents.reduce(
        (n, d) => n + (d.text.match(/```mermaid/g) || []).length,
        0,
      ),
    },
    null,
    2,
  ),
);
console.log(`Built ${documents.length} course routes, search and 404.`);
