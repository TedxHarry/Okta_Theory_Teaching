import { test } from "node:test";
import assert from "node:assert/strict";
import { loadQuiz, renderQuiz } from "../scripts/quizzes.mjs";
import {
  shuffleOptions,
  reshuffleOptions,
  evaluateChoice,
  selectReviewQuestions,
  validSavedAnswers,
} from "../site/quiz.js";

const banks = Array.from({ length: 16 }, (_, i) =>
  loadQuiz(`quizzes/day-${String(i + 1).padStart(2, "0")}.json`, i + 1),
);

test("mixed reviews balance days without duplicates or modifying the pool", () => {
  for (const [days, count] of [
    [5, 10],
    [10, 10],
    [15, 15],
  ]) {
    const pool = banks.slice(0, days).flatMap((b) => b.questions);
    const before = structuredClone(pool);
    const sample = selectReviewQuestions(pool, count, () => 0.49);
    assert.equal(sample.length, count);
    assert.equal(new Set(sample.map((q) => q.id)).size, count);
    const coverage = new Map();
    for (const q of sample)
      coverage.set(q.id.slice(0, 3), (coverage.get(q.id.slice(0, 3)) || 0) + 1);
    assert.equal(coverage.size, days);
    assert.deepEqual([...coverage.values()], Array(days).fill(count / days));
    assert.deepEqual(pool, before);
    assert.notDeepEqual(
      sample.map((q) => q.id),
      selectReviewQuestions(pool, count, () => 0.1).map((q) => q.id),
    );
  }
});

test("saved progress accepts current choices and rejects stale or malformed records", () => {
  const data = { ...banks[0], revision: "current" };
  const q = data.questions[0];
  const record = {
    version: 1,
    revision: "current",
    enabled: true,
    answers: { [q.id]: q.correctId, unknown: "bad" },
  };
  assert.deepEqual(validSavedAnswers(record, data), { [q.id]: q.correctId });
  for (const patch of [
    { version: 2 },
    { revision: "old" },
    { enabled: false },
    { answers: [] },
    { answers: null },
  ])
    assert.equal(validSavedAnswers({ ...record, ...patch }, data), null);
  assert.deepEqual(
    validSavedAnswers({ ...record, answers: { [q.id]: "unknown" } }, data),
    {},
  );
  assert.equal(validSavedAnswers(null, data), null);
});

test("256 independent questions have four unique options, stable IDs and substantive explanations", () => {
  assert.equal(banks.flatMap((bank) => bank.questions).length, 256);
  const prompts = banks.flatMap((bank) => bank.questions.map((q) => q.prompt));
  assert.equal(new Set(prompts).size, prompts.length);
  const questions = banks.flatMap((bank) => bank.questions);
  assert.equal(questions.filter((q) => q.evidence).length, 112);
  assert.equal(questions.filter((q) => q.reasoning).length, 96);
  for (const bank of banks) {
    assert.equal(new Set(bank.questions.map((q) => q.topic)).size, 16);
    assert.equal(bank.questions.length, 16);
    for (const question of bank.questions.slice(12)) {
      assert(question.topic.startsWith("Challenge: "));
      assert(question.evidence.length >= 2);
      assert(question.reasoning.length > 30);
      assert(question.review.heading);
    }
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

test("grading follows immutable option IDs in every order for all 1024 choices", () => {
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
  assert.equal((html.match(/Show answer and explanations/g) || []).length, 16);
  assert.equal((html.match(/class="quiz-feedback"/g) || []).length, 16);
  assert(html.includes("&lt;/script&gt;"));
  assert(!html.includes("</script><img"));
  const payload = JSON.parse(html.match(/id="quiz-data">(.*?)<\/script>/s)[1]);
  assert.equal(payload.questions[0].prompt, data.questions[0].prompt);
});
