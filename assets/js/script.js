var highScoreEl = document.querySelector("#high-score-button");
var startQuizEl = document.querySelector("#start-button");
var timer = 60;

    // Questions for quiz
var quizQuestions = [
    {
        Q: "Commonly used data types DO not include:",
        A: "1. strings",
        B: "2. booleans",
        C: "3. alerts",
        D: "4. numbers",
        answer: "3. alerts"
    },
    {
        Q: "Arrays in JavaScript can be used to store _______.",
        A: "1. numbers and strings",
        B: "2. other arrays",
        C: "3. boolens",
        D: "4. all of the above",
        answer: "4. all of the above"
    },
    {
        Q: "String values must be enclosed with _____ when being assigned to variables",
        A: "1. commas",
        B: "2. curly brackets",
        C: "3. quotes",
        D: "4. parenthesis",
        answer: "3. quotes"
    },
    {
        Q: "The condition in an if/else statement is enclosed with ______.",
        A: "1. quotes",
        B: "2. curly brackets",
        C: "3. parenthesis",
        D: "4. square brackets",
        answer: "3. parenthesis"
    },
    {
        Q: "A very useful tool used during development and debuggin for printing content to the debugger is:",
        A: "1. JavaScript",
        B: "2. terminal/bash",
        C: "3. for loops",
        D: "4. console.log",
        answer: "4. console log"
    }
];

var askQuestion = function() {
    // questionsContainerEl.innerHTML = "";
    questionContainerEl = document.createElement("div");
    // questionContainerEl.className = "question-actions";
       
    var question1 = document.createElement("li");   
    question1.textContent = "Hello there"; 
    questionContainerEl.appendChild(question1);

    var question2 = document.createElement("li");
    questionContainerEl.appendChild(question2);

    var question3 = document.createElement("li")
    questionContainerEl.appendChild(question3);

    var question4 = document.createElement("li");
    questionContainerEl.appendChild(question4);

    var question5 = document.createElement("li");
    questionContainerEl.appendChild(question5);
};


var quiz = function(event) {
    event.preventDefault();
    //resetDisplay(); 
    askQuestion (quizQuestions);
};

var highScores = function() {
    alert("button clicked");
};

    // click for high score
highScoreEl.addEventListener("click", highScores);

    // cick to start quiz
startQuizEl.addEventListener("click", askQuestion);