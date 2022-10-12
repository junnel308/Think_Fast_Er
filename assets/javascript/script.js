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
// Answer choices for question 4
var incorrectAnswer13 = document.querySelector("#chosen4-answer1");
var incorrectAnswer14 = document.querySelector("#chosen4-answer2");
var incorrectAnswer15 = document.querySelector("#chosen4-answer3");
var correctAnswer16 = document.querySelector("#chosen4-correct4");
// Answer choices for question 5
var incorrectAnswer17 = document.querySelector("#chosen5-answer1");
var incorrectAnswer18 = document.querySelector("#chosen5-answer2");
var incorrectAnswer19 = document.querySelector("#chosen5-answer3");
var correctAnswer20 = document.querySelector("#chosen5-correct4");
// Section for questions
var questionOne = document.querySelector("#first-question");
var questionTwo = document.querySelector("#second-question");
var questionThree = document.querySelector("#third-question");
var questionFour = document.querySelector("#fourth-question");
var questionFive = document.querySelector("#fifth-question");

var scoreDisplay = document.querySelector("#high-scores");
var clickScores = document.querySelector("#float-left");
var scoreZ = document.querySelector("#scores");

const highScorePage = document.querySelector("#score-display");
const highScorePage1 = document.querySelector("#score-display1");
const nameInput = document.querySelector("#user-name");
const submitButton = document.querySelector("#click-me");
const playAgain = document.querySelector("#play-again");

let timeSeconds = 90;
let totalScore = 7500;

let displayScore = localStorage.getItem("highScorePage");

function displayTimer() {
    var timerDown = countdownTimer();
    var timerText = document.querySelector("#timer-down");
    
    timerText.value = timerDown;
}

startButton.addEventListener("click", displayTimer);

clickScores.addEventListener("click", () => {
    mainDisplay.style.visibility = "hidden";
    startButton.style.visibility = "hidden";
    questionOne.style.visibility = "hidden";
    questionTwo.style.visibility = "hidden";
    questionThree.style.visibility = "hidden";
    questionFour.style.visibility = "hidden";
    questionFive.style.visibility = "hidden";

    swal({
        title: 'Redirecting.....',
        buttons: false,
        text: " ",
        timer: 2000
    }).then((timer) => {
        timer: 2000
        scoreDisplay.style.visibility = "visible";
    })
});

function countdownTimer () {

    var countDown = setInterval(() => {
        timeSeconds--;
        timeDisplay.innerHTML = `${timeSeconds}`;

        if(timeSeconds < 0) {
            clearInterval(countDown);
            swal({
                title: 'Times Up!' + " " + "Your Score is:" + " " + totalScore,
                icon: 'warning',
                text: " ",
            }).then((timer) => {
                mainDisplay.style.visibility = "visible";
                startButton.style.visibility = "hidden";
                questionOne.style.visibility = "hidden";
                questionTwo.style.visibility = "hidden";
                questionThree.style.visibility = "hidden";
                questionFour.style.visibility = "hidden";
                questionFive.style.visibility = "hidden";
                scoreDisplay.style.visibility = "hidden";
            })
        } 
    },1000); 


    mainDisplay.style.visibility = "hidden";
    startButton.style.visibility = "hidden";
    questionOne.style.visibility = "visible";

// Question 1
    incorrectAnswer1.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
        })
    }); 

    incorrectAnswer2.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
        })
    });

    incorrectAnswer3.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
        })
    });

    correctAnswer4.addEventListener("click", ()=> {
        swal({
            title: 'Correct!',
            icon: 'success',
            text: 'Points: 1500',
            buttons: false,
            timer: 1100
        }).then((timer) => {
        timer: 1200
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
        })
    });

//Question 2
    incorrectAnswer5.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
        })
    });

    incorrectAnswer6.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
        })
    });

    incorrectAnswer7.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
        })
    });

    correctAnswer8.addEventListener("click", ()=> {
        swal({
            title: 'Correct!',
            icon: 'success',
            text: 'Points: 1500',
            buttons: false,
            timer: 1100
        }).then((timer) => {
        timer: 1200
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
        })
    });

//Question 3
    incorrectAnswer9.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
        })
    });

    incorrectAnswer10.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
        })
    });

    incorrectAnswer11.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
        })
    });

    correctAnswer12.addEventListener("click", ()=> {
        swal({
            title: 'Correct!',
            icon: 'success',
            text: 'Points: 1500',
            buttons: false,
            timer: 1100
        }).then((timer) => {
        timer: 1200
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
        })
    });

//Question 4
    incorrectAnswer13.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
        })
    });

    incorrectAnswer14.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
        })
    });

    incorrectAnswer15.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
        timer: 1200
        totalScore -= 1500;
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
        })
    });

    correctAnswer16.addEventListener("click", ()=> {
        swal({
            title: 'Correct!',
            icon: 'success',
            text: 'Points: 1500',
            buttons: false,
            timer: 1100
        }).then((timer) => {
        timer: 1200
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
        })
    });

//Question 5
    incorrectAnswer17.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
            swal({
                title: 'Score:' + ' ' + totalScore,
            }).then ((timer) => {
                timer: 1500
                questionFive.style.visibility = "hidden";
                scoreDisplay.style.visibility = "visible";
                scoreZ.style.visibility = "visible";
            })

        })
    });

    incorrectAnswer18.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
            swal({
                title: 'Score:' + ' ' + totalScore,
            }).then ((timer) => {
                timer: 1500
                questionFive.style.visibility = "hidden";
                scoreDisplay.style.visibility = "visible";
                scoreZ.style.visibility = "visible";
            })
        })
    });

    incorrectAnswer19.addEventListener("click", () => {
        timeSeconds -= 9;
        swal({
            title: 'Incorrect!',
            icon: 'error',
            text: 'Time: -10',
            buttons: false,
            timer: 1300
        }).then((timer) => {
            swal({
                title: 'Score:' + ' ' + totalScore,
            }).then ((timer) => {
                timer: 1500
                questionFive.style.visibility = "hidden";
                scoreDisplay.style.visibility = "visible";
                scoreZ.style.visibility = "visible";
            })
        })
    });

    correctAnswer20.addEventListener("click", (event)=> {
        event.preventDefault;
        swal({
            title: 'Correct!',
            icon: 'success',
            text: 'Points: 1500',
            buttons: false,
            timer: 1100
        }).then(() => {
            swal({
                title: 'Score:' + ' ' + totalScore,
            }).then ((timer) => {
                timer: 1500
                questionFive.style.visibility = "hidden";
                scoreDisplay.style.visibility = "visible";
                scoreZ.style.visibility = "visible";
            })
        })
    });


    submitButton.addEventListener("click", ()=> {
        highScorePage.innerHTML = nameInput.value + ":" + " " + `${totalScore}`;
    });

    playAgain.addEventListener("click", ()=> {
       scoreDisplay.style.visibility = "hidden";
       scoreZ.style.visibility = "hidden";
       questionOne.style.visibility = "visible";
    });

}





