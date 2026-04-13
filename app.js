let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let locked = false;
let currentMode = "learn";
let results = [];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const modeBadge = document.getElementById("modeBadge");
const progressEl = document.getElementById("progress");
const questionIdEl = document.getElementById("questionId");
const questionTextEl = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

const resultSummaryEl = document.getElementById("resultSummary");
const resultDetailsEl = document.getElementById("resultDetails");
const restartBtn = document.getElementById("restartBtn");

document.querySelectorAll("[data-mode][data-count]").forEach(btn => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    const count = Number(btn.dataset.count);
    startQuiz(mode, count);
  });
});

restartBtn.addEventListener("click", returnToMenu);
nextBtn.addEventListener("click", goToNextQuestion);

function startQuiz(mode, amount) {
  if (!Array.isArray(questions) || questions.length === 0) {
    alert("Keine Fragen gefunden. Prüfe data.js.");
    return;
  }

  const validQuestions = questions.filter(q =>
    q &&
    typeof q.id === "string" &&
    typeof q.question === "string" &&
    q.answers &&
    typeof q.answers === "object" &&
    typeof solutions[q.id] === "string"
  );

  if (validQuestions.length === 0) {
    alert("Fragen oder Lösungen sind unvollständig.");
    return;
  }

  if (amount > validQuestions.length) {
    alert(`Es sind nur ${validQuestions.length} gültige Fragen vorhanden.`);
    return;
  }

  currentMode = mode;
  quizQuestions = shuffle([...validQuestions]).slice(0, amount);
  currentIndex = 0;
  score = 0;
  locked = false;
  results = [];

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  modeBadge.textContent = currentMode === "exam" ? "Prüfungsmodus" : "Lernmodus";

  showQuestion();
}

function showQuestion() {
  locked = false;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  nextBtn.classList.add("hidden");
  answersEl.innerHTML = "";

  const q = quizQuestions[currentIndex];

  progressEl.textContent = `Frage ${currentIndex + 1} von ${quizQuestions.length}`;
  questionIdEl.textContent = q.id;
  questionTextEl.textContent = q.question;

  const optionKeys = ["a", "b", "c", "d"];

  optionKeys.forEach(key => {
    if (!q.answers[key]) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "answer-btn";
    btn.dataset.key = key;
    btn.textContent = `${key.toUpperCase()}: ${q.answers[key]}`;
    btn.addEventListener("click", () => handleAnswer(key));

    answersEl.appendChild(btn);
  });
}

function handleAnswer(selectedKey) {
  if (locked) return;
  locked = true;

  const q = quizQuestions[currentIndex];
  const correctKey = solutions[q.id];
  const isCorrect = selectedKey === correctKey;

  results.push({
    id: q.id,
    question: q.question,
    selected: selectedKey,
    correct: correctKey,
    answers: q.answers,
    isCorrect
  });

  if (isCorrect) {
    score++;
  }

  const buttons = answersEl.querySelectorAll(".answer-btn");
  buttons.forEach(btn => {
    btn.disabled = true;
    const key = btn.dataset.key;

    if (currentMode === "learn") {
      if (key === correctKey) {
        btn.classList.add("correct");
      }
      if (key === selectedKey && key !== correctKey) {
        btn.classList.add("wrong");
      }
    } else {
      if (key === selectedKey) {
        btn.classList.add("selected");
      }
    }
  });

  if (currentMode === "learn") {
    if (isCorrect) {
      feedbackEl.textContent = "Richtig.";
      feedbackEl.classList.add("good");
    } else {
      feedbackEl.textContent = `Falsch. Richtig ist ${correctKey.toUpperCase()}.`;
      feedbackEl.classList.add("bad");
    }

    window.setTimeout(() => {
      goToNextQuestion();
    }, 900);
  } else {
    feedbackEl.textContent = "Antwort gespeichert.";
    nextBtn.classList.remove("hidden");
  }
}

function goToNextQuestion() {
  currentIndex++;

  if (currentIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const total = quizQuestions.length;
  const percent = Math.round((score / total) * 100);

  if (currentMode === "exam") {
    resultSummaryEl.innerHTML =
      `Prüfungsmodus abgeschlossen.<br>` +
      `Richtig: <strong>${score} von ${total}</strong><br>` +
      `Ergebnis: <strong>${percent}%</strong>`;
  } else {
    resultSummaryEl.innerHTML =
      `Lernmodus abgeschlossen.<br>` +
      `Richtig: <strong>${score} von ${total}</strong><br>` +
      `Trefferquote: <strong>${percent}%</strong>`;
  }

  renderResultDetails();
}

function renderResultDetails() {
  resultDetailsEl.innerHTML = "";

  results.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `result-item ${item.isCorrect ? "correct" : "wrong"}`;

    const chosenText = item.answers[item.selected] || "Keine Antwort";
    const correctText = item.answers[item.correct] || "";

    wrapper.innerHTML = `
      <h4>Frage ${index + 1}: ${item.id}</h4>
      <p><strong>Frage:</strong> ${escapeHtml(item.question)}</p>
      <p><strong>Deine Antwort:</strong> ${item.selected.toUpperCase()}: ${escapeHtml(chosenText)}</p>
      <p><strong>Richtige Antwort:</strong> ${item.correct.toUpperCase()}: ${escapeHtml(correctText)}</p>
      <p><strong>Status:</strong> ${item.isCorrect ? "richtig" : "falsch"}</p>
    `;

    resultDetailsEl.appendChild(wrapper);
  });
}

function returnToMenu() {
  resultScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  resultDetailsEl.innerHTML = "";
  resultSummaryEl.textContent = "";
  nextBtn.classList.add("hidden");

  quizQuestions = [];
  results = [];
  currentIndex = 0;
  score = 0;
  locked = false;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
