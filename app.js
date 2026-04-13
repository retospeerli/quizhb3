let quizQuestions = [];
let current = 0;
let score = 0;

function startQuiz() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  quizQuestions = shuffle(questions).slice(0, 20);
  current = 0;
  score = 0;

  showQuestion();
}

function showQuestion() {
  const q = quizQuestions[current];

  document.getElementById("progress").innerText =
    `Frage ${current + 1} / ${quizQuestions.length}`;

  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  for (let key in q.answers) {
    const btn = document.createElement("button");
    btn.innerText = `${key.toUpperCase()}: ${q.answers[key]}`;
    btn.onclick = () => checkAnswer(key, btn);
    answersDiv.appendChild(btn);
  }
}

function checkAnswer(selected, button) {
  const correct = solutions[quizQuestions[current].id];

  if (selected === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  setTimeout(() => {
    current++;
    if (current < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 800);
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  const result = document.getElementById("result");
  result.classList.remove("hidden");

  result.innerHTML = `<h2>Ergebnis: ${score} / ${quizQuestions.length}</h2>
    <button onclick="location.reload()">Nochmal</button>`;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
