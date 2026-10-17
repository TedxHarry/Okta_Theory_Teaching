import fs from "node:fs";
import assert from "node:assert/strict";

const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export function loadQuiz(file, lesson) {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.lesson, lesson);
  assert(data.questions.length >= 12, `${file}: incomplete coverage`);
  const ids = new Set();
  const prompts = new Set();
  for (const q of data.questions) {
    assert.match(q.id, /^L\d{2}-Q\d{2}$/);
    assert(!ids.has(q.id), `${file}: duplicate question ID`);
    ids.add(q.id);
    assert(!prompts.has(q.prompt), `${file}: duplicate prompt`);
    prompts.add(q.prompt);
    assert(q.topic && q.prompt.length > 45);
    if (q.evidence)
      assert(
        Array.isArray(q.evidence) &&
          q.evidence.length > 1 &&
          q.evidence.every(
            (line) => typeof line === "string" && line.length > 10,
          ),
      );
    if (q.reasoning)
      assert(typeof q.reasoning === "string" && q.reasoning.length > 30);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options.map((o) => o.id)).size, 4);
    assert.equal(new Set(q.options.map((o) => o.text)).size, 4);
    assert(q.options.some((o) => o.id === q.correctId));
    for (const o of q.options) {
      assert.match(o.id, /^[a-f0-9]{10}$/);
      assert(
        o.text.trim().length > 0 && o.explanation.length > 30,
        `${q.id}: missing explanation`,
      );
    }
    assert(!JSON.stringify(q).includes("\u2014"), `${q.id}: em dash`);
    assert(
      !/as (?:discussed|explained|shown|mentioned)|in (?:the |this )?lesson|previous question|above diagram|earlier example/i.test(
        q.prompt,
      ),
      `${q.id}: dependent prompt`,
    );
  }
  return data;
}

export function quizSearchText(data) {
  return data.questions
    .map((q) => `${q.topic} ${q.prompt} ${(q.evidence || []).join(" ")}`)
    .join(" ");
}

export function renderQuiz(data, title) {
  const cards = data.questions
    .map((q, index) => {
      // Balance the initial HTML too; runtime shuffling does not change grading IDs.
      const offset = index % q.options.length;
      const options = [
        ...q.options.slice(offset),
        ...q.options.slice(0, offset),
      ];
      const correct = q.options.find((o) => o.id === q.correctId);
      const fallback = options
        .map(
          (o) =>
            `<li><strong>${o.id === q.correctId ? "Correct" : "Incorrect"}: ${escape(o.text)}</strong><p>${escape(o.explanation)}</p></li>`,
        )
        .join("");
      const evidence = q.evidence
        ? `<pre class="quiz-evidence" id="${q.id}-evidence">${escape(q.evidence.join("\n"))}</pre>`
        : "";
      const reasoning = q.reasoning
        ? `<p class="quiz-reasoning">${escape(q.reasoning)}</p>`
        : "";
      return `<section class="quiz-card" id="${q.id}" data-question-id="${q.id}"><fieldset${q.evidence ? ` aria-describedby="${q.id}-evidence"` : ""}><legend><span class="quiz-meta">Question ${index + 1} of ${data.questions.length} · ${escape(q.topic)}</span><span class="quiz-prompt">${escape(q.prompt)}</span></legend>${evidence}${reasoning}<div class="quiz-options" hidden>${options.map((o, i) => `<label class="quiz-option"><input type="radio" name="${q.id}" value="${o.id}"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + i)}</span><span>${escape(o.text)}</span></label>`).join("")}</div></fieldset><span class="quiz-announcement" role="status" aria-live="polite" aria-atomic="true"></span><div class="quiz-feedback" hidden><div class="quiz-result"></div><details class="quiz-rationales"><summary>Understand every option</summary><ul></ul></details></div><noscript><details><summary>Show answer and explanations</summary><p><strong>Correct answer: ${escape(correct.text)}</strong></p><ul>${fallback}</ul></details></noscript></section>`;
    })
    .join("");
  const memory =
    data.mode === "mixed"
      ? `<button type="button" onclick="location.reload()">New review set</button>`
      : `<label class="remember-choice"><input type="checkbox" id="remember-answers"> Remember my answers on this device</label><p id="memory-note" role="status"></p><button type="button" id="reset-quiz" onclick="this.dispatchEvent(new CustomEvent('quiz-reset'))">Reset this quiz</button>`;
  return `<div class="eyebrow">${data.mode === "mixed" ? "Cumulative practice" : `Lesson ${data.lesson} · Knowledge practice`}</div><h1>${escape(title)}</h1><p class="quiz-intro">${data.mode === "mixed" ? `Each visit draws ${data.sampleSize} questions across Days 1 to ${data.lastDay}. The set balances the days and uses questions you can answer independently. ` : ""}Choose an answer to see whether it is correct, why, and what the correct answer means. Each question stands on its own. You can change your choice to explore another explanation.</p><p class="quiz-progress" id="quiz-progress" hidden>0 of ${data.questions.length} answered</p><div class="quiz-tools" hidden>${memory}<button type="button" id="retry-missed" onclick="this.dispatchEvent(new CustomEvent('quiz-retry',{bubbles:true}))" hidden>Retry missed questions</button><p id="retry-note" role="status"></p></div><noscript><p>Open each question's explanation to check your answer. Interactive selection needs JavaScript. Mixed reviews show the complete review pool below without JavaScript.</p></noscript><div class="quiz-list">${cards}</div><script type="application/json" id="quiz-data">${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`;
}
