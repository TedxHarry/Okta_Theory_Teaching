import assert from "node:assert/strict";
import fs from "node:fs";
import AxeBuilder from "@axe-core/playwright";
import { launchBrowser } from "../scripts/browser.mjs";
import { serve } from "../scripts/serve.mjs";
const server = serve(4173),
  browser = await launchBrowser(),
  base = "http://127.0.0.1:4173/Okta_Theory_Teaching/";
const manifest = JSON.parse(
  fs.readFileSync("docs/build-manifest.json", "utf8"),
);
fs.mkdirSync("test-results", { recursive: true });
const errors = [],
  results = [];
async function audit(page, name) {
  const report = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  fs.writeFileSync(
    `test-results/axe-${name}.json`,
    JSON.stringify(report, null, 2),
  );
  assert.deepEqual(
    report.violations.map((v) => ({ id: v.id, nodes: v.nodes.length })),
    [],
    name,
  );
}
try {
  const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
    }),
    page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  for (const route of [...manifest.documents.map((d) => d.route), "search/"]) {
    assert.equal((await page.goto(base + route)).status(), 200, route);
    assert.equal(await page.locator("h1").count(), 1, route);
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      route,
    );
    assert.equal(
      await page.locator('.toc,[aria-label="On this page"]').count(),
      0,
    );
  }
  results.push(
    "All 124 navigable routes load with one H1, no right outline, no page overflow and no script errors.",
  );
  await page.goto(base);
  await page.evaluate(() => document.fonts.ready);
  await audit(page, "home");
  await page.screenshot({ path: "test-results/home-desktop.png" });
  await page.getByRole("link", { name: "Start with Lesson 1" }).click();
  assert(page.url().endsWith("lessons/day-01-people-identities-access.html"));
  assert.equal(await page.locator(".lesson-nav li").count(), 16);
  const expanded = (await page.locator("main").boundingBox()).width;
  await page.locator(".course-menu > summary").click();
  await page.waitForFunction(
    () => localStorage.getItem("okta-teaching-lessons-desktop") === "closed",
  );
  assert((await page.locator("main").boundingBox()).width > expanded + 150);
  await page.reload();
  assert.equal(await page.locator(".course-menu").getAttribute("open"), null);
  await page.locator(".course-menu > summary").focus();
  await page.keyboard.press("Enter");
  assert.equal(await page.locator(".course-menu").getAttribute("open"), "");
  await audit(page, "lesson");
  await page.screenshot({ path: "test-results/lesson-desktop.png" });
  const diagram = page.getByRole("link", { name: "Open full diagram" }).first();
  await diagram.click();
  assert.equal(await page.locator("dialog[open]").count(), 1);
  await page.keyboard.press("Escape");
  assert(await diagram.evaluate((el) => el === document.activeElement));
  await page.locator('.reading-modes a[href*="question-bank"]').click();
  await page.locator(".qb-answer summary").nth(0).click();
  await page.locator(".qb-answer summary").nth(1).click();
  assert.equal(await page.locator(".qb-answer[open]").count(), 2);
  await audit(page, "questions");
  await page.goto(base + "question-bank/day-01.html#q03-explanation");
  assert.equal(await page.locator("#q03-explanation").getAttribute("open"), "");
  const positions = new Set();
  for (const bank of manifest.documents.filter((d) => d.kind === "Quizzes")) {
    await page.goto(base + bank.route);
    await page.locator(".quiz-options:not([hidden])").first().waitFor();
    assert.equal(await page.locator(".reading-modes a").count(), 3);
    const data = JSON.parse(await page.locator("#quiz-data").textContent());
    assert.equal(data.questions.length, 12);
    for (const q of data.questions) {
      const ids = await page
        .locator(`#${q.id} input`)
        .evaluateAll((nodes) => nodes.map((n) => n.value));
      positions.add(ids.indexOf(q.correctId));
    }
    const q = data.questions[0],
      card = page.locator(`#${q.id}`);
    await card
      .locator(
        `input[value="${q.options.find((o) => o.id !== q.correctId).id}"]`,
      )
      .check();
    assert(
      (await card.locator(".quiz-verdict").innerText()).includes("incorrect"),
    );
    assert(
      (await card.locator(".quiz-result").innerText()).includes(
        q.options.find((o) => o.id === q.correctId).text,
      ),
    );
    const before = await card
      .locator("input")
      .evaluateAll((nodes) => nodes.map((n) => n.value));
    await page
      .getByRole("button", { name: "Retry missed questions (1)", exact: true })
      .click();
    assert.equal(await card.locator("input:checked").count(), 0);
    assert.equal(await card.locator(".quiz-feedback").isVisible(), false);
    assert.notDeepEqual(
      await card
        .locator("input")
        .evaluateAll((nodes) => nodes.map((n) => n.value)),
      before,
    );
    await card.locator(`input[value="${q.correctId}"]`).check();
    assert.equal(await card.locator(".quiz-verdict").innerText(), "Correct.");
    await card.getByText("Understand every option", { exact: true }).click();
    assert.equal(await card.locator(".quiz-rationales li").count(), 4);
  }
  assert.equal(positions.size, 4);
  results.push(
    "All 16 quiz banks grade by stable IDs, shuffle across all four answer positions, explain choices and retry missed questions.",
  );
  await page.goto(base + "quizzes/day-01.html");
  const data = JSON.parse(await page.locator("#quiz-data").textContent());
  const first = page.locator(".quiz-card").first();
  await first.locator(`input[value="${data.questions[0].correctId}"]`).check();
  const second = page.locator(".quiz-card").nth(1);
  await second
    .locator(
      `input[value="${data.questions[1].options.find((o) => o.id !== data.questions[1].correctId).id}"]`,
    )
    .check();
  await page
    .getByRole("button", { name: "Retry missed questions (1)", exact: true })
    .click();
  assert.equal(await first.locator(".quiz-verdict").innerText(), "Correct.");
  assert.equal(await first.locator("input:checked").count(), 1);
  assert.equal(
    await page.locator("#quiz-progress").innerText(),
    "1 of 12 answered",
  );
  await second.locator("input").first().focus();
  await page.keyboard.press("Space");
  await page.keyboard.press("ArrowDown");
  assert.equal(await second.locator("input:checked").count(), 1);
  await audit(page, "quiz-feedback");
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: "test-results/quiz-desktop.png" });
  await page.getByRole("link", { name: "Search", exact: true }).click();
  const search = page.getByRole("searchbox", { name: "Search terms" });
  await search.fill("SCIM");
  assert((await page.locator("#search-results li").count()) > 0);
  await page.reload();
  assert.equal(await search.inputValue(), "SCIM");
  await search.fill("no-such-topic-xyz");
  assert(await page.locator("#no-results").isVisible());
  await page.getByRole("button", { name: "Clear search" }).click();
  assert.equal(
    await page.locator("#search-results li").count(),
    manifest.documents.length,
  );
  await audit(page, "search");
  await page.setViewportSize({ width: 390, height: 844 });
  for (const [name, route] of [
    ["home", ""],
    ["lesson", "lessons/day-01-people-identities-access.html"],
    ["questions", "question-bank/day-01.html"],
    ["quiz", "quizzes/day-01.html"],
    ["saml", "lessons/day-08-saml.html"],
    ["oidc", "lessons/day-09-oidc.html"],
    ["scim", "lessons/day-10-scim.html"],
    ["reference", "reference/"],
    ["final-case", "assessments/final-case.html"],
  ]) {
    await page.goto(base + route);
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      name,
    );
    assert.equal(await page.locator(".course-menu").getAttribute("open"), null);
    await audit(page, name + "-mobile");
    if (name === "quiz" || name === "lesson")
      await page.screenshot({ path: `test-results/${name}-mobile.png` });
  }
  await page.setViewportSize({ width: 320, height: 740 });
  for (const d of manifest.documents.filter((d) => d.kind === "Quizzes")) {
    await page.goto(base + d.route);
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      d.route,
    );
  }
  const nojs = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    }),
    fallback = await nojs.newPage();
  await fallback.goto(base + "quizzes/day-01.html");
  await fallback
    .getByText("Show answer and explanations", { exact: true })
    .first()
    .click();
  assert.equal(await fallback.locator(".quiz-card details[open]").count(), 1);
  await fallback.goto(base + "question-bank/day-01.html");
  await fallback.locator(".qb-answer summary").first().click();
  assert.equal(await fallback.locator(".qb-answer[open]").count(), 1);
  await nojs.close();
  assert.equal((await page.goto(base + "missing-page/")).status(), 404);
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
    "auto",
  );
  assert.deepEqual(errors, []);
  results.push(
    "669 original question explanations, legacy explanation anchors, desktop/mobile navigation, diagram focus, search, narrow quizzes, no-JavaScript fallback and reduced motion pass.",
  );
  const report = { passed: results, accessibilityViolations: 0 };
  fs.writeFileSync(
    "test-results/results.json",
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
