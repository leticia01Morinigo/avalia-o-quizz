const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("resultado");
const scoreText = document.getElementById("scoreText");
const restartButton = document.getElementById("restartButton");
const incorrectAnswersContainer = document.getElementById("incorrectAnswers");

const questions = [
    { question: "Quem pintou a obra 'Mona Lisa'?", options: ["Michelangelo", "Van Gogh", "Leonardo da Vinci"], answer: 2 },
    { question: "Qual autor da obra 'O Grito'?", options: ["Edvard Munch", "Picasso", "Michelangelo"], answer: 0 },
    { question: "Qual pintor é conhecido pela obra 'Abaporu'?", options: ["Di Cavalcante", "Tarsila do Amaral", "Cândido Portinari"], answer: 1 },
    { question: "Quem escreveu 'Dom Quixote'?", options: ["Shakespeare", "Cervantes", "Goethe"], answer: 1 },
    { question: "Qual pintor famoso é conhecido por suas obras de girassóis?", options: ["Picasso", "Van Gogh", "Monet"], answer: 1 },
    { question: "Qual pintor brasileiro criou obras sobre a cultura brasileira?", options: ["Tarsila do Amaral", "Anita Malfatti", "Portinari"], answer: 2 },
    { question: "Qual pintor é conhecido por seus relógios derretidos?", options: ["Picasso", "Salvador Dalí", "Monet"], answer: 1 },
    { question: "Qual pintor é considerado o fundador do impressionismo?", options: ["Monet", "Renoir", "Da Vinci"], answer: 0 },
    { question: "Qual pintor é impressionista?", options: ["Michelangelo", "Portinari", "Monet"], answer: 2 },
    { question: "Qual artista é famoso por suas figuras geométricas e coloridas?", options: ["Tarsila do Amaral", "Alfredo Volpi", "Di Cavalcante"], answer: 1 }
];

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function startQuiz() {
    document.getElementById("inicio").classList.add("hidden");
    quizContainer.classList.remove("hidden");
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        const questionData = questions[currentQuestion];
        quizContainer.innerHTML = `
            <div id="questionNumber">Pergunta ${currentQuestion + 1}/${questions.length}</div>
            <h2>${questionData.question}</h2>
            ${questionData.options.map((option, index) => 
                <button onclick="checkAnswer(${index})">${option}</button>
            ).join('')}
        `;
    } else {
        showResults();
    }
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestion];
    if (selectedOption === questionData.answer) {
        score++;
    } else {
        incorrectAnswers.push({
            question: questionData.question,
            correctAnswer: questionData.options[questionData.answer]
        });
    }
    currentQuestion++;
    showQuestion();
}

function showResults() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreText.textContent = Você acerto ${score}/${questions.length} perguntas!;

    incorrectAnswersContainer.innerHTML = incorrectAnswers.length > 0
        ? "<h3>Respostas corretas para as questões erradas:</h3>" +
          incorrectAnswers.mapitem => ('<p>${item.question}<br><strong>Resposta correta:</strong> ${item.correctAnswer}</p>').join('')
        ; "<p>Parabéns! Você acertou todas as questões!</p>";
   }

function resetQuiz() {
    resultContainer.classList.add("hidden");
    document.getElementById("inicio").classList.remove("hidden");
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", resetQuiz);