const questions = [
    {
        question: "Yo _____ pizza ayer .",
        answers: [
            { text: "come", correct: false },
            { text: "comía", correct: false },
            { text: "comió", correct: false },
            { text: "comí", correct: true }
        ]
    },
    {
        question: "El libro _____ leí ayer era muy interesante.",
        answers: [
            { text: "que", correct: true },
            { text: "quien", correct: false },
            { text: "cual", correct: false },
            { text: "donde", correct: false }
        ]
    },
    {

        question: " Ella quiere _____ en la fiesta",
        answers: [
            { text: "bailé", correct: false },
            { text: "bailaré", correct: false },
            { text: "bailaría", correct: false },
            { text: "bailar", correct: true }
        ]
    },
    {
        question: "Esta es la casa de _____ amigo.",
        answers: [
            { text: "mi", correct: false },
            { text: "mío", correct: true },
            { text: "mis", correct: false },
            { text: "mí", correct: false }
        ]
    },
    {
        question: "Espero que ella _____ a la fiesta.",
        answers: [
            { text: "viene", correct: false },
            { text: "venga", correct: true },
            { text: "vendrá", correct: false },
            { text: "vendría", correct: false }
        ]
    },
    {
        question: "Tengo dos hermanos, uno es alto y el otro es _____ .",
        answers: [
            { text: "alta", correct: false },
            { text: "altos", correct: false },
            { text: "alto", correct: true },
            { text: "altas", correct: false }
        ]
    }

];
const questionElement = document.getElementById("pergunta");
const answerButtonsElement = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const progressBar = document.getElementById("progress");
const progressText = document.getElementById("progress-text");
const finishButton = document.getElementById("finish-btn");
const backButtonFinish = document.getElementById("back-question");
const result = document.getElementById("result");
const resultText = document.getElementById("result-text");
const ResultNivel = document.getElementById("result-nivel");
const restartButton = document.getElementById("restart-btn");
let currentQuestionIndex = 0;
let score = 0;



function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    showQuestion();
    setNextQuestion();
    selectAnswer();
    finishQuiz();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    if (quiz.classList.contains("hide")) {
        quiz.classList.remove("hide");
        quiz.classList.add("show");
    }
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    if (currentQuestionIndex === 0) {
        backButton.style.filter = "brightness(50%)";
    } else {
        backButton.style.filter = "brightness(100%)";
    }
    progress();
}

nextButton.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else if (currentQuestionIndex > lastQuestion) {

        currentQuestionIndex = lastQuestion;
        finishQuiz();
    }
});


backButton.addEventListener("click", () => {
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
        showQuestion();
    } else {
        currentQuestionIndex = 0;
    }
});




function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    selectedButton.classList.add('btn-selected');
    if (correct) {
        score++;
    }

    nextButton.style.filter = "brightness(100%)";
    nextButton.disabled = false;
};

function resetState() {
    nextButton.style.filter = "brightness(50%)";
    nextButton.disabled = true;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function progress() {
    const currentQuestion = currentQuestionIndex + 1;
    progressBar.style.width = (currentQuestion / questions.length) * 100 + "%";
    progressText.innerHTML = (currentQuestionIndex + 1) + "/" + questions.length;
}

function finishQuiz() {
    if (finish.classList.contains("hide")) {
        finish.classList.remove("hide");
        finish.classList.add("show");
    } else {
        finish.classList.remove("show");
        finish.classList.add("hide");
    }
    const quiz = document.getElementById("quiz");
    if (quiz.classList.contains("show")) {
        quiz.classList.remove("show");
        quiz.classList.add("hide");
    } else {
        quiz.classList.remove("hide");
        quiz.classList.add("show");
    }
}
backButtonFinish.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex = lastQuestion;
    showQuestion();
    finishQuiz();
}
);
finishButton.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex = lastQuestion;
    if (finish.classList.contains("show")) {
        finish.classList.remove("show");
        finish.classList.add("hide");
    }
    resultQuiz();
}
);
function resultQuiz() {
    if (result.classList.contains("hide")) {
        result.classList.remove("hide");
        result.classList.add("show");
    }
    else {
        result.classList.remove("show");
        result.classList.add("hide");
    }
    resultText.innerHTML = "Você acertou " + score + " de " + questions.length + " questões.";
    restartButton.style.filter = "brightness(100%)";
    resultNivel();
    resultBaar();

}
function resultBaar() {
    const resultBar = document.getElementById("result-bar");
    if (score == 0) {
        resultBar.classList.add("result-bar0");
    } else if (score == 1) {
        resultBar.classList.add("result-bar1");
    } else if (score == 2) {
        resultBar.classList.add("result-bar2");
    } else if (score == 3) {
        resultBar.classList.add("result-bar3");
    } else if (score == 4) {
        resultBar.classList.add("result-bar4");
    } else if (score == 5) {
        resultBar.classList.add("result-bar5");
    } else if (score == 6) {
        resultBar.classList.add("result-bar6");
    }
}
function resultNivel() {
    const nivelText = document.getElementById("nivel-text");
    if (score <= 1) {
        ResultNivel.innerHTML = "A1";
    }
    else if (score == 2) {
        ResultNivel.innerHTML = "A2";
    }
    else if (score == 3) {
        ResultNivel.innerHTML = "B1";
        nivelText.innerHTML = "<strong>B1</strong> - O nível B1 esta na sessão intermediaria, onde o aluno já consegue se comunicar com mais facilidade, consegue se expressar melhor e já consegue entender textos mais complexos.";
    }
    else if (score == 4) {
        ResultNivel.innerHTML = "B2";
        nivelText.innerHTML = "<strong>B2</strong> - O nível B2 esta na sessão intermediaria, onde o aluno já consegue se comunicar com mais facilidade, consegue se expressar melhor e já consegue entender textos mais complexos.";
    }
    else if (score == 5) {
        ResultNivel.innerHTML = "C1";
        nivelText.innerHTML = "<strong>C1</strong> - O nível C1 esta na sessão avançada, onde o aluno já consegue se comunicar com mais fluência, se expressar com um vocabulario mais amplo e já consegue entender textos mais complexos.";
    }
    else if (score == 6) {
        ResultNivel.innerHTML = "C2";
        nivelText.innerHTML = "<strong>C2</strong> - O nível C2 esta na sessão avançada, onde o aluno já consegue se comunicar com mais fluência, se expressar com um vocabulario mais amplo e já consegue entender textos mais complexos.";
    }
}

startQuiz();

