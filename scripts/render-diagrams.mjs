import fs from "node:fs";
import crypto from "node:crypto";
import { launchBrowser } from "./browser.mjs";
const browser = await launchBrowser(),
  page = await browser.newPage(),
  manifest = {};
const files = ["index.md", "overview.md", "learning-path.md"];
function collect(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = dir + "/" + entry.name;
    if (entry.isDirectory()) collect(p);
    else if (p.endsWith(".md")) files.push(p);
  }
}
for (const dir of [
  "lessons",
  "reference",
  "assessments",
  "exercises",
  "self-checks",
  "revision",
  "requests",
  "notebook",
  "question-bank",
])
  collect(dir);
try {
  await page.setContent('<div id="diagram"></div>');
  await page.addScriptTag({ path: "node_modules/mermaid/dist/mermaid.min.js" });
  await page.evaluate(() =>
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "neutral",
      fontFamily: "Arial",
      flowchart: { htmlLabels: false, useMaxWidth: false },
      sequence: { useMaxWidth: false },
    }),
  );
  let count = 0;
  fs.mkdirSync("site/diagrams", { recursive: true });
  for (const file of files)
    for (const match of fs
      .readFileSync(file, "utf8")
      .replaceAll("\r\n", "\n")
      .matchAll(/```mermaid\n([\s\S]*?)\n```/g)) {
      const source = match[1].trim(),
        sha = crypto.createHash("sha256").update(source).digest("hex"),
        name = sha.slice(0, 16) + ".svg";
      count++;
      if (manifest[sha]) continue;
      const svg = await page.evaluate(
        async ({ source, id }) => {
          document.querySelector("#diagram").innerHTML = "";
          return (await mermaid.render(id, source)).svg;
        },
        { source, id: "render_" + sha.slice(0, 16) },
      );
      fs.writeFileSync("site/diagrams/" + name, svg);
      manifest[sha] = { file: name, source: file };
    }
  fs.writeFileSync(
    "site/diagrams/manifest.json",
    JSON.stringify(manifest, null, 2),
  );
  console.log(
    `Rendered ${Object.keys(manifest).length} distinct diagrams for ${count} placements.`,
  );
} finally {
  await browser.close();
}
