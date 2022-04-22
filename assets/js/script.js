// Questions for quiz
var quizQuestions = [
    {
        Q: "Commonly used data types DO not include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "alerts"
    },
    {
        Q: "Arrays in JavaScript can be used to store _______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "all of the above"
    },
    {
        Q: "String values must be enclosed with _____ when being assigned to variables",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "quotes"
    },
    {
        Q: "The condition in an if/else statement is enclosed with ______.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "parenthesis"
    },
    {
        Q: "A very useful tool used during development and debuggin for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "console.log"
    }
];

var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#questions");
var choicesContainer = document.querySelector("#choices");
var timerEl = document.getElementById ("countdown");
var timeLeft = 5;
var correct = 0;
var currentQuestionIndex = 0;

    //timer function
function timer(){
    timerEl.textContent = "Time remaining: " + timeLeft + "s";
    quizDuration = setInterval(function(){
        if (timeLeft > 0) {
            adjustTime(-1);
        } else {
            endQuiz();
        }
    },1000);
}
function adjustTime(amount) {
    timeLeft += amount;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    timerEl.textContent ="Time remaining: " + timeLeft + "s";
}

    // start timer
startButton.onclick = timer;

    // starts quiz
startButton.addEventListener("click", startGame);

function startGame() {
    startScreen.classList.add("hide");
    quizScreen.removeAttribute("class")
    showQuestion();
  }

function showQuestion()  { 
    var currentQuestion = quizQuestions[currentQuestionIndex];  
    
    var questionTitle = document.querySelector("#question-title")
    questionTitle.textContent = currentQuestion.Q;

    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach(function(choice){
        console.log("choice from currentQuestion.choices", choice)

        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.setAttribute("class", "choice");

        choiceBtn.textContent = choice;

        choiceBtn.onclick = handleClick;

        choicesContainer.appendChild(choiceBtn)
    })
}

function handleClick(){
// testing value of button against currentQuestion answer
    if(this.value === quizQuestions[currentQuestionIndex].answer){
        correct++
    } else {
        // adjustTime(-10);
    }
    // add 1 to currentquestion index
    currentQuestionIndex++

    // testing if currentQuestion index is at the last question end otherwise call showQuestion and keep it moving
    if(currentQuestionIndex === quizQuestions.length){
        // quizEnd();
    } else {
        showQuestion()
    }
}

var allDoneScreen = document.querySelector("#all-done");

    // endQuiz
function endQuiz() {      
    // hide the questionsContainer and show end screen
    quizScreen.classList.add("hide");
    // allDoneScreen.removeAttribute("class");

    var endPage = document.createElement("h2");
    questionContainer.appendChild(endPage);

    // here  you want to stop the timer
    // show the endQuiz div
    // divide correct/questions.length ** youre going to need to remove the 0. from the decimal look up .split()
    //
}

// when submit button is clicked call saveHighScore()
var initialsInput = document.getElementById("initials")

function saveHighScore(){
   // var intialsValue = initialsInput.value.trim()
   // var score = correct/questions.length   ** again youre going to need to remove the 0. 

    // test to make sure something was entered in initials otherwise dont do anything

    var newScore = {
        initials: initialsValue,
        score: score
    }
    
    // save newScore to localstorage    
}
