var questions = [{
    "question": "What is Captain America's shield made out off?",
    "option1": "Titanium",
    "option2": "Vibranium",
    "option3": "Wakandan Micro Ally",
    "option4": "Steel",
    "answer": "2"
}, {
    "question": "What is the name of the Technology that keeps Tony Stark alive?",
    "option1": "Chronometer",
    "option2": "Tachymetere Chrome",
    "option3": "The Arc Reactor",
    "option4": "Tourbillion",
    "answer": "3"
}, {
    "question": "What is Star Lord's Real name?",
    "option1": "Peter Quill",
    "option2": "Nick Fury",
    "option3": "Wade Wilson",
    "option4": "Peter Parker",
    "answer": "1"
}, {
    "question": "How many infinity stone exist in the MCU",
    "option1": "6",
    "option2": "5",
    "option3": "4",
    "option4": "3",
    "answer": "1"
}, {
    "question": "What is the mystic cube that the Red Skull try's to use to conquer the World?",
    "option1": "The Orb",
    "option2": "The Aether",
    "option3": "The Tesseract",
    "option4": "The Time Stone",
    "answer": "3"
}]

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question")
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result")


function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + "." + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion() {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        alert("Please Select Your Answer")
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++
    if (currentQuestion == totQuestions - 1) {
        nextButton.textContent = "Submit";
    }
    if (currentQuestion == totQuestions) {
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "your score: " + score;
        return;
    }
    loadQuestion(currentQuestion)
}
loadQuestion(currentQuestion);
