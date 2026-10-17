import { test } from "node:test";
import assert from "node:assert/strict";
import { loadQuiz, renderQuiz } from "../scripts/quizzes.mjs";
import {
  shuffleOptions,
  reshuffleOptions,
  evaluateChoice,
} from "../site/quiz.js";

const banks = Array.from({ length: 16 }, (_, i) =>
  loadQuiz(`quizzes/day-${String(i + 1).padStart(2, "0")}.json`, i + 1),
);

test("192 independent questions have four unique options, stable IDs and substantive explanations", () => {
  assert.equal(banks.flatMap((bank) => bank.questions).length, 192);
  const prompts = banks.flatMap((bank) => bank.questions.map((q) => q.prompt));
  assert.equal(new Set(prompts).size, prompts.length);
  const questions = banks.flatMap((bank) => bank.questions);
  assert.equal(questions.filter((q) => q.evidence).length, 16);
  assert.equal(questions.filter((q) => q.reasoning).length, 32);
  for (const bank of banks) {
    assert.equal(new Set(bank.questions.map((q) => q.topic)).size, 12);
    assert.equal(bank.questions.length, 12);
  }
});

test("retry changes option order even when the random draw repeats the same order", () => {
  for (const bank of banks)
    for (const q of bank.questions) {
      const next = reshuffleOptions(q.options, () => 0.999);
      assert.notDeepEqual(
        next.map((o) => o.id),
        q.options.map((o) => o.id),
      );
      assert.equal(
        evaluateChoice({ ...q, options: next }, q.correctId).isCorrect,
        true,
      );
      assert.deepEqual(
        [...next].map((o) => o.id).sort(),
        q.options.map((o) => o.id).sort(),
      );
    }
});

test("grading follows immutable option IDs in every order for all 768 choices", () => {
  for (const bank of banks)
    for (const q of bank.questions) {
      for (const selected of q.options) {
        for (const random of [() => 0, () => 0.49, () => 0.999]) {
          const reordered = {
            ...q,
            options: shuffleOptions(q.options, random),
          };
          const grade = evaluateChoice(reordered, selected.id);
          assert.equal(grade.isCorrect, selected.id === q.correctId);
          assert.equal(grade.correct.id, q.correctId);
          assert.equal(grade.selected.explanation, selected.explanation);
        }
      }
      assert.throws(() => evaluateChoice(q, "unknown"), /Unknown quiz option/);
    }
});

test("shuffling preserves content, does not mutate data and allows every correct-answer position", () => {
  const options = banks[0].questions[0].options;
  const original = structuredClone(options);
  const positions = new Set();
  for (let a = 0; a < 4; a++)
    for (let b = 0; b < 3; b++)
      for (let c = 0; c < 2; c++) {
        const draws = [(a + 0.1) / 4, (b + 0.1) / 3, (c + 0.1) / 2];
        const shuffled = shuffleOptions(options, () => draws.shift());
        assert.notEqual(shuffled, options);
        assert.deepEqual(
          [...shuffled].sort((x, y) => x.id.localeCompare(y.id)),
          [...options].sort((x, y) => x.id.localeCompare(y.id)),
        );
        positions.add(shuffled.findIndex((o) => o.id === options[0].id));
      }
  assert.equal(positions.size, 4);
  assert.deepEqual(options, original);
});

test("generated quizzes include per-question no-script explanations and escape script-breaking content", () => {
  const data = structuredClone(banks[0]);
  data.questions[0].prompt += " </script><img src=x>";
  const html = renderQuiz(data, "Test quiz");
  assert(html.includes('class="quiz-evidence"'));
  assert(html.includes('aria-describedby="L01-Q12-evidence"'));
  assert(html.includes('class="quiz-reasoning"'));
  assert.equal((html.match(/Show answer and explanations/g) || []).length, 12);
  assert.equal((html.match(/class="quiz-feedback"/g) || []).length, 12);
  assert(html.includes("&lt;/script&gt;"));
  assert(!html.includes("</script><img"));
  const payload = JSON.parse(html.match(/id="quiz-data">(.*?)<\/script>/s)[1]);
  assert.equal(payload.questions[0].prompt, data.questions[0].prompt);
});
