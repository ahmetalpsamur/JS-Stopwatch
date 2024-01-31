
let second = 1000;
let msecond = 20;

let intervalID;

const start_button = document.querySelector(".button-start");
const stop_button = document.querySelector(".button-stop");
const reset_button = document.querySelector(".button-reset");

const time_second = document.querySelector(".p-time-second");
const time_msecond = document.querySelector(".p-time-msecond");
const time_minitues = document.querySelector(".p-time-minitues");

let timeforSecond = 0;
let timeforMilisecond = 0;
let timeforMinitues = 0;

function startTimer() {
    intervalID = setInterval(function () {
        if (timeforMilisecond >= 1000) {
            timeforMilisecond = 0;
            timeforSecond = timeforSecond + 1;
            if (timeforSecond >= 60) {
                timeforSecond = 0;
                timeforMinitues = timeforMinitues + 1;
                time_minitues.innerHTML = timeforMinitues;
            }
            time_second.innerHTML = timeforSecond;
        } else {
            timeforMilisecond = timeforMilisecond + msecond;
            time_msecond.innerHTML = timeforMilisecond;
        }

    }, msecond);
}


function stopTimer() {
    clearInterval(intervalID);
}
function resetTimer() {
    stopTimer();
    timeforSecond = 0;
    timeforMilisecond = 0;
    timeforMinitues = 0;


    time_msecond.innerHTML = timeforMilisecond;
    time_second.innerHTML = timeforSecond;
    time_minitues.innerHTML = timeforMinitues;
}
start_button.addEventListener("click", startTimer);
stop_button.addEventListener("click", stopTimer);
reset_button.addEventListener("click", resetTimer)

