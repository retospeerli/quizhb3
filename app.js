(() => {
  "use strict";

  let quizQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let locked = false;
  let currentMode = "learn";
  let answerLog = [];

  let startScreen;
  let quizScreen;
  let resultScreen;

  let modeLabelEl;
  let progressEl;
  let questionIdEl;
  let questionTextEl;
  let answersEl;
  let feedbackEl;
  let resultTextEl;
  let resultDetailsEl;
  let nextBtn;
  let backToMenuBtn;

  let learn20Btn;
  let learn40Btn;
  let learn60Btn;
  let exam60Btn;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    startScreen = document.getElementById("startScreen");
    quizScreen = document.getElementById("quizScreen");
    resultScreen = document.getElementById("resultScreen");

    modeLabelEl = document.getElementById("modeLabel");
    progressEl = document.getElementById("progress");
    questionIdEl = document.getElementById("questionId");
    questionTextEl = document.getElementById("questionText");
    answersEl = document.getElementById("answers");
    feedbackEl = document.getElementById("feedback");
    resultTextEl = document.getElementById("resultText");
    resultDetailsEl = document.getElementById("resultDetails");
    nextBtn = document.getElementById("nextBtn");
    backToMenuBtn = document.getElementById("backToMenuBtn");

    learn20Btn = document.getElementById("learn20Btn");
    learn40Btn = document.getElementById("learn40Btn");
    learn60Btn = document.getElementById("learn60Btn");
    exam60Btn = document.getElementById("exam60Btn");

    if (!allElementsPresent()) {
      alert("Fehler: HTML-Elemente fehlen.");
      return;
    }

    learn20Btn.addEventListener("click", () => startQuiz("learn", 20));
    learn40Btn.addEventListener("click", () => startQuiz("learn", 40));
    learn60Btn.addEventListener("click", () => startQuiz("learn", 60));
    exam60Btn.addEventListener("click", () => startQuiz("exam", 60));
    nextBtn.addEventListener("click", goToNextQuestion);
    backToMenuBtn.addEventListener("click", goToStart);
  }

  function allElementsPresent() {
    return !!(
      startScreen &&
      quizScreen &&
      resultScreen &&
      modeLabelEl &&
      progressEl &&
      questionIdEl &&
      questionTextEl &&
      answersEl &&
      feedbackEl &&
      resultTextEl &&
      resultDetailsEl &&
      nextBtn &&
      backToMenuBtn &&
      learn20Btn &&
      learn40Btn &&
      learn60Btn &&
      exam60Btn
    );
  }

  function startQuiz(mode, amount) {
    if (!Array.isArray(window.questions) || window.questions.length === 0) {
      alert("Keine Fragen gefunden. Prüfe data.js.");
      return;
    }

    if (!window.solutions || typeof window.solutions !== "object") {
      alert("Keine Lösungen gefunden. Prüfe data.js.");
      return;
    }

    const validQuestions = window.questions.filter((q) =>
      q &&
      typeof q.id === "string" &&
      typeof q.question === "string" &&
      q.answers &&
      typeof q.answers === "object" &&
      ["a", "b", "c", "d"].includes(window.solutions[q.id])
    );

    if (validQuestions.length < amount) {
      alert(`Zu wenige gültige Fragen gefunden. Verfügbar: ${validQuestions.length}`);
      return;
    }

    currentMode = mode;
    quizQuestions = shuffle([...validQuestions]).slice(0, amount);
    currentIndex = 0;
    score = 0;
    locked = false;
    answerLog = [];

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    modeLabelEl.textContent = currentMode === "learn" ? "Lernmodus" : "Prüfungsmodus";
    showQuestion();
  }

  function showQuestion() {
    locked = false;
    feedbackEl.textContent = "";
    answersEl.innerHTML = "";
    nextBtn.classList.add("hidden");

    const q = quizQuestions[currentIndex];
    progressEl.textContent = `Frage ${currentIndex + 1} von ${quizQuestions.length}`;
    questionIdEl.textContent = q.id;
    questionTextEl.textContent = q.question;

    const optionKeys = ["a", "b", "c", "d"];

    optionKeys.forEach((key) => {
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
    const correctKey = window.solutions[q.id];
    const buttons = answersEl.querySelectorAll(".answer-btn");

    answerLog.push({
      id: q.id,
      question: q.question,
      selected: selectedKey,
      correct: correctKey,
      isCorrect: selectedKey === correctKey
    });

    if (selectedKey === correctKey) {
      score++;
    }

    if (currentMode === "learn") {
      buttons.forEach((btn) => {
        btn.disabled = true;
        const key = btn.dataset.key;

        if (key === correctKey) {
          btn.classList.add("correct");
        }

        if (key === selectedKey && key !== correctKey) {
          btn.classList.add("wrong");
        }
      });

      if (selectedKey === correctKey) {
        feedbackEl.textContent = "Richtig.";
      } else {
        feedbackEl.textContent = `Falsch. Richtig ist ${correctKey.toUpperCase()}.`;
      }

      window.setTimeout(() => {
        goToNextQuestion();
      }, 900);

      return;
    }

    buttons.forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.key === selectedKey) {
        btn.classList.add("selected");
      }
    });

    feedbackEl.textContent = "Antwort gespeichert.";
    nextBtn.classList.remove("hidden");
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
      resultTextEl.textContent = `Prüfungsmodus: ${score} von ${total} richtig (${percent}%).`;
    } else {
      resultTextEl.textContent = `Lernmodus: ${score} von ${total} richtig (${percent}%).`;
    }

    resultDetailsEl.innerHTML = buildResultDetails();
  }

  function buildResultDetails() {
    if (!answerLog.length) {
      return "<p>Keine Daten vorhanden.</p>";
    }

    const items = answerLog.map((entry) => {
      const userLetter = entry.selected.toUpperCase();
      const correctLetter = entry.correct.toUpperCase();
      const cssClass = entry.isCorrect ? "correct" : "wrong";

      return `
        <div class="result-item ${cssClass}">
          <strong>${escapeHtml(entry.id)}</strong>
          <div>${escapeHtml(entry.question)}</div>
          <div>Deine Antwort: ${userLetter}</div>
          <div>Richtige Antwort: ${correctLetter}</div>
        </div>
      `;
    });

    return `<div class="result-list">${items.join("")}</div>`;
  }

  function goToStart() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    answersEl.innerHTML = "";
    feedbackEl.textContent = "";
    resultTextEl.textContent = "";
    resultDetailsEl.innerHTML = "";
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
})();
