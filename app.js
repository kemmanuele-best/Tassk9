const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Abuja", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "What planet does man live on?",
        answers: ["Venus", "Mars", "Jupiter", "Earth"],
        correct: "Earth"
    },
    {
        question: "What is the capital of Lagos State?",
        answers: ["Ikeja", "Oshodi", "Apo", "Osun"],
        correct: "Ikeja"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answersList = document.getElementById("answers-list");

    answersList.innerHTML = '';

    questionText.textContent = questionData.question;

    questionData.answers.forEach(answer => {
    const li = document.createElement("li");
    li.textContent = answer;

    li.addEventListener("click", function () {
        selectAnswer(answer, li);
     });

    answersList.appendChild(li);
    });

    
    answersList.appendChild(li);

    const progress = document.querySelectorAll('question-number');
    progress.forEach(item => {
        item.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    });

function selectAnswer (selectedAnswer, liElement) {
    const correctAnswer = quizData[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
        liElement.classList.add("correct");
    } else {
        liElement.classList.add("incorrect");
    }

const answerItems = document.querySelectorAll('#answers-list li');
answerItems.forEach(item => item.style.pointerEvents = 'none');
document.getElementById("next-button").disabled = false;

function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    const resultsContainer = document.getElementById("results-Container");
    const finalScore = document.getElementById("final-score");

    quizContainer.style.display = "none";
    resultsContainer.style.display = "block";
    finalScore.textContent = score;
}

document.getElementById("next-button").addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        document.getElementById("next-button").disabled = true;
    } else {
        showResults();
    }
});

loadQuestion();