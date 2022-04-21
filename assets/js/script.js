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

var startQuizEl = document.querySelector("#start-button");
var currentQuestion = 0;

function RenderQuestion(questionIndex)  {
var container = document.createElement("div");
var question = document.createElement("h2");
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");

question.textContent = "What's your favorite Color?"
option1.textContent = "Blue"
option2.textContent = "Red"
option3.textContent = "Green"
option4.textContent = "Fuchsia"

document.body.appendChild(container);
container.appendChild(question);
container.appendChild(option1);
container.appendChild(option2);
container.appendChild(option3);
container.appendChild(option4);
}
startQuizEl.addEventListener('click', RenderQuestion(currentQuestion))