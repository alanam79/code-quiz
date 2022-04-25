scoreContainer.style.display = "none"
// Questions for quiz
var quizQuestions = [
    {
        Q: "Commonly used data types DO not include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        Q: "Arrays in JavaScript can be used to store _______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        Q: "String values must be enclosed with _____ when being assigned to variables",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {
        Q: "The condition in an if/else statement is enclosed with ______.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "3. parenthesis"
    },
    {
        Q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }
];

var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#questions");
var choicesContainer = document.querySelector("#choices");
var timerEl = document.getElementById ("countdown");
var endQuizContainer = document.getElementById ("endQuiz");
var scoreButton = document.querySelector("#scoreBtn");
var viewScore = document.getElementById("#high-score");
var scoreScreen = document.getElementById("#score-container")
var timeLeft = 75;
var correct = 0;
var currentQuestionIndex = 0;
var userScore = 0;


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

    // starts quiz
startButton.addEventListener("click", startGame);

function startGame() {
    timer();
    startScreen.style.display = "none"    
    scoreContainer.style.display = "none"
    // .removeAttribute("class")
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
    var answerResults = document.querySelector("#answer-results");
        // testing value of button against currentQuestion answer
    if(this.value === quizQuestions[currentQuestionIndex].answer){
        correct++;
        answerResults.textContent = "Correct!";
        userScore++;        
    } else {
        adjustTime(-10);
        answerResults.textContent = "Wrong!";
    }
        // add 1 to currentquestionindex
    currentQuestionIndex++;

        // testing if currentQuestion index is at the last question end otherwise call showQuestion and keep it moving
    if (currentQuestionIndex === quizQuestions.length){
        endQuiz();
    } else {
        showQuestion()
    }
};

    // endQuiz
function endQuiz() {  
        // stop the timer
    clearInterval(quizDuration);
    timerEl.textContent = "";
        // hide the questionsContainer and show end screen
    quizScreen.style.display = "none"
    endQuizContainer.style.display = "block"
    scoreContainer.style.display = "none"
        // divide correct/questions.length ** youre going to need to remove the 0. from the decimal look up .split()

        // button element
    // var initialsBtn = document.createElement("button");
    //     initialsBtn.innerHTML="Submit";
    //     document.appendChild(initialsBtn);
}

    // click highscore button
scoreBtn.addEventListener("click", highScore);  

function highScore() {
    // .removeAttribute("class")
    startScreen.style.display = "none";
    quizScreen.style.display = "none"
    endQuizContainer.style.display = "none"
    scoreContainer.style.display = "block"
    clearInterval(quizDuration);
    timerEl.textContent = "";
}


function saveHighScore(){
   // var intialsValue = initialsInput.value.trim()
   // var score = correct/questions.length   ** again youre going to need to remove the 0. 

    // test to make sure something was entered in initials otherwise dont do anything

    var newScore = {
        initials: initialsValue,
        score: score
    }    
    // save newScore to localstorage   
    var newScore = function() {
        localStorage.setItem("tasks", JSON.stringify(score));
      };
}


