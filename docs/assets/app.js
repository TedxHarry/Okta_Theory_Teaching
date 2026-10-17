document.documentElement.classList.add("js");

const menu = document.querySelector(".course-menu");
if (menu) {
  const narrow = matchMedia("(max-width: 799px)");
  const preferenceKey = () =>
    `okta-teaching-lessons-${narrow.matches ? "mobile" : "desktop"}`;
  const restoreMenu = () => {
    let saved = null;
    try {
      saved = localStorage.getItem(preferenceKey());
    } catch {}
    menu.open = saved === null ? !narrow.matches : saved === "open";
  };
  restoreMenu();
  menu.addEventListener("toggle", () => {
    try {
      localStorage.setItem(preferenceKey(), menu.open ? "open" : "closed");
    } catch {}
  });
  narrow.addEventListener("change", restoreMenu);
}

const dialog = document.querySelector("#diagram-dialog");
let diagramTrigger;
for (const trigger of document.querySelectorAll("[data-diagram]")) {
  trigger.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
      return;
    if (!dialog || typeof dialog.showModal !== "function") return;
    event.preventDefault();
    diagramTrigger = trigger;
    document.querySelector("#diagram-title").textContent =
      trigger.dataset.diagram;
    const image = document.querySelector("#full-diagram");
    image.src = trigger.href;
    image.alt = trigger.dataset.diagram;
    dialog.showModal();
    document.querySelector("#close-diagram").focus();
  });
}
dialog?.addEventListener("close", () => diagramTrigger?.focus());

const input = document.querySelector("#course-search");
if (input) {
  const data = JSON.parse(document.querySelector("#search-data").textContent);
  const clear = document.querySelector("#clear-search");
  const results = document.querySelector("#search-results");
  const status = document.querySelector("#search-count");
  function search() {
    const query = input.value.trim();
    const terms = query.toLocaleLowerCase("en").split(/\s+/).filter(Boolean);
    const matches = data
      .filter((d) => query || !d.question)
      .filter((d) =>
        terms.every((t) =>
          `${d.title} ${d.description} ${d.text}`
            .toLocaleLowerCase("en")
            .includes(t),
        ),
      );
    results.replaceChildren();
    for (const d of matches) {
      const row = document.createElement("li");
      const kind = document.createElement("small");
      kind.textContent = d.kind;
      const link = document.createElement("a");
      link.href = d.url;
      link.textContent = d.title;
      const desc = document.createElement("p");
      desc.textContent = d.description;
      row.append(kind, link, desc);
      results.append(row);
    }
    clear.hidden = !query;
    document.querySelector("#no-results").hidden = matches.length !== 0;
    status.textContent = query
      ? `${matches.length} ${matches.length === 1 ? "result" : "results"} found for “${query}”.`
      : `Browse all ${data.filter((d) => !d.question).length} course pages below.`;
    const url = new URL(location.href);
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    history.replaceState(null, "", url);
  }
  input.value = new URL(location.href).searchParams.get("q") || "";
  input.addEventListener("input", (event) => {
    if (!event.isComposing) search();
  });
  input.addEventListener("compositionend", search);
  search();
}

function openLinkedAnswer() {
  const target = document.getElementById(
    decodeURIComponent(location.hash.slice(1)),
  );
  if (target?.matches("details.qb-answer")) {
    target.open = true;
    target.scrollIntoView();
  }
}
openLinkedAnswer();
window.addEventListener("hashchange", openLinkedAnswer);
