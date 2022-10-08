var startButton = document.querySelector("#start");
var timeDisplay = document.querySelector('span');
var mainDisplay = document.querySelector('main');
// Answer choices for question 1
var incorrectAnswer1 = document.querySelector("#chosen1-answer1");
var incorrectAnswer2 = document.querySelector("#chosen1-answer2");
var incorrectAnswer3 = document.querySelector("#chosen1-answer3");
var correctAnswer4 = document.querySelector("#chosen1-correct4");
// Answer choices for question 2
var incorrectAnswer5 = document.querySelector("#chosen2-answer1");
var incorrectAnswer6 = document.querySelector("#chosen2-answer2");
var incorrectAnswer7 = document.querySelector("#chosen2-answer3");
var correctAnswer8 = document.querySelector("#chosen2-correct4");
// Answer choices for question 3
var incorrectAnswer9 = document.querySelector("#chosen3-answer1");
var incorrectAnswer10 = document.querySelector("#chosen3-answer2");
var incorrectAnswer11 = document.querySelector("#chosen3-answer3");
var correctAnswer12 = document.querySelector("#chosen3-correct4");
// Section for questions
var questionOne = document.querySelector("#first-question");
var questionTwo = document.querySelector("#second-question");
var questionThree = document.querySelector("#third-question");
var questionFour = document.querySelector("#fourth-question");
var questionFive = document.querySelector("#fifth-question");

let timeSeconds = 90;


function displayTimer() {
    var timerDown = countdownTimer();
    var timerText = document.querySelector("#timer-down");

    timerText.value = timerDown;
}

function displayQuestions(){

}

startButton.addEventListener("click", displayTimer);

function countdownTimer () {

    var countDown = setInterval(() => {
        timeSeconds--;
        timeDisplay.innerHTML = `${timeSeconds}`;

        if(timeSeconds < 0) {
            clearInterval(countDown);
            alert("Times Up! Please Try Again!");
            window.location.reload();
        } 
    },1000); 

    startButton.style.visibility= "hidden";
    questionOne.style.visibility = "visible";

// Question 1
    incorrectAnswer1.addEventListener("click", () => {
        alert("Your already drunk? Thats Incorrect!");
        timeSeconds -= 10;
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    });

    incorrectAnswer2.addEventListener("click", () => {
        alert("Your already drunk? Thats Incorrect!");
        timeSeconds -= 10;
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    });

    incorrectAnswer3.addEventListener("click", () => {
        alert("Your already drunk? Thats Incorrect!");
        timeSeconds -= 10;
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    });

    correctAnswer4.addEventListener("click", ()=> {
        alert("You might need a shot. Thats Correct!");
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    });

//Question 2
    incorrectAnswer5.addEventListener("click", () => {
        alert("Your already drunk? Thats Incorrect!");
        timeSeconds -= 10;
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    });

    incorrectAnswer6.addEventListener("click", () => {
        alert("Your already drunk? Thats Incorrect!");
        timeSeconds -= 10;
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    });

    incorrectAnswer7.addEventListener("click", () => {
        alert("Your already drunk? Thats Incorrect!");
        timeSeconds -= 10;
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    });

    correctAnswer8.addEventListener("click", ()=> {
        alert("You might need a shot. Thats Correct!");
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    });

//Question 3
    incorrectAnswer9.addEventListener("click", () => {
        alert("Your already drunk? Thats Incorrect!");
        timeSeconds -= 10;
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
    });

    incorrectAnswer10.addEventListener("click", () => {
        alert("Your already drunk? Thats Incorrect!");
        timeSeconds -= 10;
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";;
    });

    incorrectAnswer11.addEventListener("click", () => {
        alert("Your already drunk? Thats Incorrect!");
        timeSeconds -= 10;
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
    });

    correctAnswer12.addEventListener("click", ()=> {
        alert("You might need a shot. Thats Correct!");
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
    });

}


