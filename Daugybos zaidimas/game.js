let questions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let missedAnswers = 0;
let timer;
let timeLeft = 10;

function generateQuestions() {
  questions = [];
  for (let i = 0; i < 50; i++) {
    const num1 = Math.floor(Math.random() * 4) + 2; // Skaičiai nuo 2 iki 5
    const num2 = Math.floor(Math.random() * 9) + 2; // Skaičiai nuo 2 iki 10
    questions.push({ num1, num2, correct: num1 * num2 });
  }
  shuffleQuestions();
}

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function startGame() {
  correctAnswers = 0;
  wrongAnswers = 0;
  missedAnswers = 0;
  currentQuestionIndex = 0;
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("summary").style.display = "none";
  document.getElementById("game").style.display = "block";
  generateQuestions();
  showQuestion();
  startConfetti();
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endGame();
    return;
  }
  const question = questions[currentQuestionIndex];
  document.getElementById("num1").innerText = question.num1;
  document.getElementById("num2").innerText = question.num2;
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
  timeLeft = 10;
  updateTimer();
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    missedAnswers++;
    currentQuestionIndex++;
    showQuestion();
  } else {
    document.getElementById("timer").innerText = `Laikas: ${timeLeft} s`;
    timeLeft--;
  }
}

function submitAnswer() {
  const answer = parseInt(document.getElementById("answer").value);
  const question = questions[currentQuestionIndex];
  if (answer === question.correct) {
    correctAnswers++;
  } else {
    wrongAnswers++;
  }
  clearInterval(timer);
  currentQuestionIndex++;
  showQuestion();
}

function endGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("summary").style.display = "block";
  document.getElementById(
    "correctAnswers"
  ).innerText = `Teisingi atsakymai: ${correctAnswers}`;
  document.getElementById(
    "wrongAnswers"
  ).innerText = `Neteisingi atsakymai: ${wrongAnswers}`;
  document.getElementById(
    "missedAnswers"
  ).innerText = `Neatsakyti klausimai: ${missedAnswers}`;
  stopConfetti();
}

function startConfetti() {
  const container = document.getElementById("confetti-container");
  container.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(confetti);
  }
}

function stopConfetti() {
  const container = document.getElementById("confetti-container");
  container.innerHTML = "";
}

window.onload = function () {
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("game").style.display = "none";
  document.getElementById("summary").style.display = "none";
};
