let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let locked = false;

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const progressEl = document.getElementById("progress");
const questionIdEl = document.getElementById("questionId");
const questionTextEl = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const resultTextEl = document.getElementById("resultText");

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
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
    solutions[q.id]
  );

  if (validQuestions.length === 0) {
    alert("Fragen oder Lösungen sind unvollständig.");
    return;
  }

  quizQuestions = shuffle([...validQuestions]).slice(0, 20);
  currentIndex = 0;
  score = 0;
  locked = false;

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  locked = false;
  feedbackEl.textContent = "";
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
  const buttons = answersEl.querySelectorAll(".answer-btn");

  buttons.forEach(btn => {
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
    score++;
    feedbackEl.textContent = "Richtig.";
  } else {
    feedbackEl.textContent = `Falsch. Richtig ist ${correctKey.toUpperCase()}.`;
  }

  window.setTimeout(() => {
    currentIndex++;

    if (currentIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 900);
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  resultTextEl.textContent = `Du hast ${score} von ${quizQuestions.length} Fragen richtig beantwortet.`;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
