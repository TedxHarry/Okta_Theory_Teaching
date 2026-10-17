export function shuffleOptions(options, random = Math.random) {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function evaluateChoice(question, optionId) {
  const selected = question.options.find((option) => option.id === optionId);
  const correct = question.options.find(
    (option) => option.id === question.correctId,
  );
  if (!selected || !correct) throw new Error("Unknown quiz option");
  return { isCorrect: selected.id === correct.id, selected, correct };
}

export function reshuffleOptions(options, random = Math.random) {
  const next = shuffleOptions(options, random);
  return next.every((option, i) => option.id === options[i].id)
    ? [...next.slice(1), next[0]]
    : next;
}

export function selectReviewQuestions(questions, count, random = Math.random) {
  const groups = new Map();
  for (const q of questions) {
    const day = q.id.slice(0, 3);
    if (!groups.has(day)) groups.set(day, []);
    groups.get(day).push(q);
  }
  const queues = shuffleOptions([...groups.values()], random).map((group) =>
    shuffleOptions(group, random),
  );
  const result = [];
  while (result.length < count && queues.some((group) => group.length))
    for (const group of queues)
      if (group.length && result.length < count) result.push(group.shift());
  return result;
}

export function validSavedAnswers(record, data) {
  if (
    !record ||
    record.version !== 1 ||
    record.revision !== data.revision ||
    record.enabled !== true ||
    !record.answers ||
    Array.isArray(record.answers) ||
    typeof record.answers !== "object"
  )
    return null;
  const valid = {};
  for (const [id, choice] of Object.entries(record.answers)) {
    const q = data.questions.find((question) => question.id === id);
    if (q?.options.some((option) => option.id === choice)) valid[id] = choice;
  }
  return valid;
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

export function initializeQuiz() {
  const payload = document.querySelector("#quiz-data");
  if (!payload) return;
  const data = JSON.parse(payload.textContent);
  const selectedQuestions =
    data.mode === "mixed"
      ? selectReviewQuestions(data.questions, data.sampleSize)
      : data.questions;
  const selectedIds = new Set(selectedQuestions.map((q) => q.id));
  for (const card of document.querySelectorAll(".quiz-card"))
    card.hidden = !selectedIds.has(card.id);
  const answered = new Set();
  const missed = new Set();
  const resets = new Map();
  const progress = document.querySelector("#quiz-progress");
  const retry = document.querySelector("#retry-missed");
  const retryNote = document.querySelector("#retry-note");
  const answers = {};
  const remember = document.querySelector("#remember-answers");
  const memoryNote = document.querySelector("#memory-note");
  const storageKey = `okta-teaching-quiz-day-${data.lesson}`;
  let restoring = false,
    saved = null;
  if (remember) {
    let raw = null;
    try {
      raw = localStorage.getItem(storageKey);
    } catch {
      remember.disabled = true;
      memoryNote.textContent =
        "Saving is unavailable in this browser. You can still use the quiz.";
    }
    try {
      saved = validSavedAnswers(JSON.parse(raw), data);
    } catch {
      saved = null;
    }
    remember.checked = saved !== null;
  }
  function persist() {
    if (!remember || remember.disabled || restoring) return;
    try {
      if (remember.checked) {
        localStorage.setItem(
          storageKey,
          JSON.stringify({
            version: 1,
            revision: data.revision,
            enabled: true,
            answers,
          }),
        );
        memoryNote.textContent = "Answers saved on this device only.";
      } else {
        localStorage.removeItem(storageKey);
        memoryNote.textContent = "Answers are kept for this visit only.";
      }
    } catch {
      remember.checked = false;
      remember.disabled = true;
      memoryNote.textContent =
        "Saving is unavailable. Your answers still work for this visit.";
    }
  }
  remember?.addEventListener("change", persist);
  function updateProgress() {
    progress.textContent = `${answered.size} of ${selectedQuestions.length} answered${answered.size === selectedQuestions.length ? ". All questions explored. You can revisit any answer." : ""}`;
    retry.hidden = missed.size === 0;
    retry.textContent = `Retry missed questions (${missed.size})`;
  }
  for (const [index, q] of selectedQuestions.entries()) {
    const card = document.getElementById(q.id);
    document.querySelector(".quiz-list").append(card);
    card.querySelector(".quiz-meta").textContent =
      `Question ${index + 1} of ${selectedQuestions.length}${data.mode === "mixed" ? ` · Day ${Number(q.id.slice(1, 3))}` : ""} · ${q.topic}`;
    let options = shuffleOptions(q.options);
    const group = card.querySelector(".quiz-options");
    const labels = new Map(
      [...group.children].map((label) => [
        label.querySelector("input").value,
        label,
      ]),
    );
    options.forEach((option, index) => {
      const label = labels.get(option.id);
      label.querySelector(".option-letter").textContent = String.fromCharCode(
        65 + index,
      );
      group.append(label);
    });
    const feedback = card.querySelector(".quiz-feedback");
    const result = feedback.querySelector(".quiz-result");
    const rationales = feedback.querySelector("ul");
    for (const option of options) {
      const li = element("li");
      li.append(
        element(
          "strong",
          "",
          `${option.id === q.correctId ? "Correct" : "Incorrect"}: ${option.text}`,
        ),
      );
      li.append(element("p", "", option.explanation));
      rationales.append(li);
    }
    resets.set(q.id, () => {
      options = reshuffleOptions(options);
      const explanations = new Map(
        [...rationales.children].map((li, i) => [
          group.children[i].querySelector("input").value,
          li,
        ]),
      );
      options.forEach((option, index) => {
        const label = labels.get(option.id);
        label.querySelector("input").checked = false;
        label.classList.remove("is-correct", "is-incorrect");
        label.querySelector(".option-letter").textContent = String.fromCharCode(
          65 + index,
        );
        group.append(label);
        rationales.append(explanations.get(option.id));
      });
      feedback.hidden = true;
      feedback.querySelector("details").open = false;
      result.replaceChildren();
      card.querySelector(".quiz-announcement").textContent = "";
      answered.delete(q.id);
      missed.delete(q.id);
      delete answers[q.id];
    });
    group.addEventListener("change", (event) => {
      if (!event.target.matches("input[type=radio]")) return;
      const answer = evaluateChoice(q, event.target.value);
      for (const [id, label] of labels) {
        label.classList.toggle("is-correct", id === answer.correct.id);
        label.classList.toggle(
          "is-incorrect",
          id === answer.selected.id && !answer.isCorrect,
        );
      }
      feedback.hidden = false;
      feedback.classList.toggle("is-correct", answer.isCorrect);
      feedback.classList.toggle("is-incorrect", !answer.isCorrect);
      const heading = element(
        "p",
        "quiz-verdict",
        answer.isCorrect
          ? "Correct."
          : "Not quite. Your selected answer is incorrect.",
      );
      const explanation = element("p", "", answer.selected.explanation);
      const correctAnswer = element("p");
      correctAnswer.append(
        element("strong", "", "Correct answer: "),
        document.createTextNode(answer.correct.text),
      );
      const nodes = [heading, correctAnswer, explanation];
      if (!answer.isCorrect)
        nodes.push(element("p", "", answer.correct.explanation));
      result.replaceChildren(...nodes);
      if (q.review?.url) {
        const review = element("p");
        const link = element("a", "", `Review this concept: ${q.review.title}`);
        link.href = q.review.url;
        review.append(link);
        result.append(review);
      }
      card.querySelector(".quiz-announcement").textContent =
        card.querySelector(".quiz-meta").textContent +
        ". " +
        nodes.map((node) => node.textContent).join(" ");
      answered.add(q.id);
      if (answer.isCorrect) missed.delete(q.id);
      else missed.add(q.id);
      retryNote.textContent = "";
      updateProgress();
      answers[q.id] = answer.selected.id;
      persist();
    });
    group.hidden = false;
  }
  retry.addEventListener("quiz-retry", () => {
    const ids = [...missed];
    if (!ids.length) return;
    ids.forEach((id) => resets.get(id)());
    updateProgress();
    persist();
    retryNote.textContent = `${ids.length} missed ${ids.length === 1 ? "question is" : "questions are"} ready to retry with reshuffled choices. Other answers are kept.`;
    document.getElementById(ids[0]).querySelector("input").focus();
  });
  document.querySelector("#reset-quiz")?.addEventListener("quiz-reset", () => {
    selectedQuestions.forEach((q) => resets.get(q.id)());
    updateProgress();
    persist();
    retryNote.textContent =
      "This quiz has been reset. All choices are ready to try again.";
    document
      .getElementById(selectedQuestions[0].id)
      .querySelector("input")
      .focus();
  });
  if (saved) {
    restoring = true;
    for (const [id, choice] of Object.entries(saved)) {
      const input = document
        .getElementById(id)
        ?.querySelector(`input[value="${choice}"]`);
      if (input) {
        input.checked = true;
        input.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
    restoring = false;
    memoryNote.textContent = "Saved answers restored on this device.";
  }
  updateProgress();
  document.querySelector(".quiz-tools").hidden = false;
  progress.hidden = false;
}

if (typeof document !== "undefined") initializeQuiz();
