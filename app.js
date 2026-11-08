const exercises = window.lessonExercises || [];

const exerciseList = document.querySelector("#exercise-list");
const searchInput = document.querySelector("#search");
const form = document.querySelector("#exercise-form");
const title = document.querySelector("#exercise-title");
const description = document.querySelector("#exercise-description");
const fieldsContainer = document.querySelector("#exercise-fields");
const resultPanel = document.querySelector("#result");
const resultContent = document.querySelector("#result-content");
const emptyState = document.querySelector("#empty-state");
const runButton = document.querySelector("#run-button");
const countLabel = document.querySelector("#exercise-count");

let selectedExercise = null;

function renderList(search = "") {
  const query = search.trim().toLocaleLowerCase();
  const filtered = exercises.filter((exercise) =>
    `${exercise.title} ${exercise.lesson} ${exercise.description}`
      .toLocaleLowerCase()
      .includes(query),
  );

  exerciseList.replaceChildren();
  countLabel.textContent = `${filtered.length} бодлого`;

  for (const exercise of filtered) {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "exercise-item";
    item.classList.toggle("is-active", selectedExercise?.id === exercise.id);
    item.setAttribute("aria-current", selectedExercise?.id === exercise.id ? "page" : "false");

    const lesson = document.createElement("span");
    lesson.className = "exercise-item__lesson";
    lesson.textContent = exercise.lesson;

    const name = document.createElement("span");
    name.className = "exercise-item__title";
    name.textContent = exercise.title;

    item.append(lesson, name);
    item.addEventListener("click", () => selectExercise(exercise));
    exerciseList.append(item);
  }

  if (filtered.length === 0) {
    const message = document.createElement("p");
    message.className = "list-empty";
    message.textContent = "Тохирох бодлого олдсонгүй.";
    exerciseList.append(message);
  }
}

function selectExercise(exercise) {
  selectedExercise = exercise;
  title.textContent = exercise.title;
  description.textContent = exercise.description;
  fieldsContainer.replaceChildren();
  resultPanel.hidden = true;
  emptyState.hidden = true;
  form.hidden = false;

  for (const field of exercise.fields || []) {
    const label = document.createElement("label");
    label.className = "field";
    label.htmlFor = `field-${field.name}`;

    const labelText = document.createElement("span");
    labelText.className = "field__label";
    labelText.textContent = field.label;

    const input = document.createElement("input");
    input.id = `field-${field.name}`;
    input.name = field.name;
    input.type = field.type || "number";
    input.autocomplete = "off";
    input.required = true;
    input.placeholder = field.placeholder || "";
    if (field.type !== "password" && field.type !== "text") {
      input.inputMode = field.integer ? "numeric" : "decimal";
      if (field.min !== undefined) input.min = String(field.min);
      if (field.max !== undefined) input.max = String(field.max);
      input.step = field.integer ? "1" : "any";
    }

    label.append(labelText, input);
    if (field.hint) {
      const hint = document.createElement("span");
      hint.className = "field__hint";
      hint.textContent = field.hint;
      label.append(hint);
    }
    fieldsContainer.append(label);
  }

  runButton.textContent = exercise.fields?.length ? "Бодох" : "Ажиллуулах";
  renderList(searchInput.value);
  title.focus?.();
}

function showResult(content, isError = false) {
  resultContent.textContent = content;
  resultPanel.classList.toggle("result--error", isError);
  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

searchInput.addEventListener("input", () => renderList(searchInput.value));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!selectedExercise) return;

  const values = {};
  for (const field of selectedExercise.fields || []) {
    const input = form.elements.namedItem(field.name);
    const raw = input.value.trim();

    if (!raw) {
      input.focus();
      showResult(`${field.label} утгыг оруулна уу.`, true);
      return;
    }

    if (field.type === "password" || field.type === "text") {
      values[field.name] = raw;
      continue;
    }

    const value = Number(raw);
    if (!Number.isFinite(value)) {
      input.focus();
      showResult(`${field.label} зөв тоо оруулна уу.`, true);
      return;
    }
    if (field.integer && !Number.isInteger(value)) {
      input.focus();
      showResult(`${field.label} бүхэл тоо байх ёстой.`, true);
      return;
    }
    if (field.min !== undefined && value < field.min) {
      input.focus();
      showResult(`${field.label} ${field.min}-ээс багагүй байна.`, true);
      return;
    }
    if (field.max !== undefined && value > field.max) {
      input.focus();
      showResult(`${field.label} ${field.max}-ээс ихгүй байна.`, true);
      return;
    }
    values[field.name] = value;
  }

  try {
    showResult(String(selectedExercise.run(values)));
  } catch (error) {
    console.error("Бодлого ажиллуулахад алдаа гарлаа:", error);
    showResult(error instanceof Error ? error.message : "Бодлогыг ажиллуулах үед алдаа гарлаа.", true);
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    !(event.target instanceof HTMLInputElement) &&
    !(event.target instanceof HTMLTextAreaElement)
  ) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderList();
if (exercises.length > 0) selectExercise(exercises[0]);
