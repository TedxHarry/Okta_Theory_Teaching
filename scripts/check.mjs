import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
const root = path.resolve("docs");
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "build-manifest.json"), "utf8"),
);
assert.equal(manifest.documents.length, 129);
assert.equal(manifest.documents.filter((d) => d.kind === "Quizzes").length, 16);
assert.equal(
  manifest.documents.reduce((n, d) => n + (d.quizzes || 0), 0),
  192,
);
assert.equal(
  manifest.documents.reduce((n, d) => n + (d.questions || 0), 0),
  669,
);
const pages = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (p.endsWith(".html")) pages.push(p);
  }
}
walk(root);
assert.equal(pages.length, 131);
let links = 0;
let diagrams = 0;
let answers = 0;
let quizCards = 0;
const decode = (s) =>
  s.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'");
for (const file of pages) {
  const text = fs.readFileSync(file, "utf8");
  const payload = text.match(/id="quiz-data">(.*?)<\/script>/s);
  if (payload) {
    for (const question of JSON.parse(payload[1]).questions) {
      const target = new URL(question.review.url, "https://example.test");
      const local = path.join(
        root,
        target.pathname.slice(manifest.base.length),
      );
      assert(
        fs
          .readFileSync(local, "utf8")
          .includes(`id="${decodeURIComponent(target.hash.slice(1))}"`),
        `Invalid concept link for ${question.id}`,
      );
    }
  }
  assert.equal((text.match(/<h1\b/g) || []).length, 1, file);
  assert(!text.includes("portable-canonical-v2:"));
  assert(!text.includes("\u2014"));
  assert(!/C:[\\/]|work\/research/.test(text), `Private path in ${file}`);
  diagrams += (text.match(/<figure class="diagram"/g) || []).length;
  quizCards += (text.match(/class="quiz-card"/g) || []).length;
  if (file.includes(`${path.sep}question-bank${path.sep}`))
    answers += (
      text.match(/<summary>Read the teaching explanation<\/summary>/g) || []
    ).length;
  for (const [, attribute, raw] of text.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const target = decode(raw);
    if (/^(?:https?:|mailto:|data:)/.test(target)) continue;
    const currentRoute =
      manifest.base + path.relative(root, file).split(path.sep).join("/");
    const url = new URL(target, "https://example.test" + currentRoute);
    assert(
      url.pathname.startsWith(manifest.base),
      `${file}: escaped project base: ${target}`,
    );
    let local = path.join(
      root,
      decodeURIComponent(url.pathname.slice(manifest.base.length)),
    );
    if (fs.existsSync(local) && fs.statSync(local).isDirectory())
      local = path.join(local, "index.html");
    assert(fs.existsSync(local), `${file}: missing ${attribute} ${target}`);
    if (url.hash) {
      const source = fs.readFileSync(local, "utf8");
      const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map((m) =>
        decode(m[1]),
      );
      assert(
        ids.includes(decodeURIComponent(url.hash.slice(1))),
        `${file}: missing anchor ${target}`,
      );
    }
    links++;
  }
}
assert.equal(diagrams, 35);
assert.equal(answers, 669);
assert.equal(quizCards, 552);
assert.equal(
  manifest.documents.filter((d) => d.kind === "Mixed review").length,
  3,
);
console.log(
  JSON.stringify(
    {
      generatedPages: pages.length,
      courseFiles: 129,
      questions: 669,
      uniqueInteractiveQuizQuestions: 192,
      quizCardPlacements: quizCards,
      diagrams,
      localLinksAndAssets: links,
      independentExpandableAnswers: answers,
      privateWorkingPaths: 0,
    },
    null,
    2,
  ),
);
