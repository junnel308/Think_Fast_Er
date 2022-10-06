var startButton = document.querySelector("#start");
var timeDisplay =document.querySelector('span');
var incorrectAnswer = document.querySelector('#chosen-answer');
var questionOne = document.querySelector("#first-question");
var questionTwo = document.querySelector("#second-question");
var questionThree = document.querySelector("#third-question");
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
        
        if(timeSeconds <= 0) {
            clearInterval(countDown);
            alert("Times Up! Please Try Again!");
        }
    },1000); 

    startButton.style.visibility= "hidden";
    questionOne.style.visibility = "visible";

    incorrectAnswer.addEventListener("click", () => {
        alert("Incorrect! Please Try Again!");
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    });

}
