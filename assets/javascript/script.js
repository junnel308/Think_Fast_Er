var startButton = document.querySelector("#start");
var timeDisplay =document.querySelector('span');

let timeSeconds = 3;


function displayTimer() {
    var timerDown = countdownTimer();
    var timerText = document.querySelector("#timer-down");

    timerText.value = timerDown;
}

function countdownTimer () {

    var countDown = setInterval(() => {
        timeSeconds--;
        timeDisplay.innerHTML = `${timeSeconds}`;

        if(timeSeconds <= 0) {
            clearInterval(countDown);
            alert("Times Up! Please Try Again!");
        }
    },1000);

}

startButton.addEventListener("click", displayTimer);