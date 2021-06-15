//grabbing HTML elements
const counter = document.getElementById("counter");
const record = document.getElementById("record");
const startButton = document.getElementById("startButton");
const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");

//used for reset button later on
let pauseEnabled = false;

//initializing record keeper
if (localStorage.clickRecord == undefined || localStorage.clickRecord == null || localStorage.clickRecord == NaN) {
    localStorage.clickRecord = 0;
}
else {
    localStorage.clickRecord;
}

//initializing/resetting counter
localStorage.clickCount = 0;

//setting counter and record in HTML
counter.textContent = localStorage.clickCount;
record.textContent = "Record: " + localStorage.clickRecord;


//hides click button and shows reset button once interval has finished
function disableCount() {
    countButton.setAttribute("hidden", true);
    resetButton.removeAttribute("hidden", true);
}

//disables pause so that the user can use the reset button
var pauseInterval;
function pause() {
    clearInterval(pauseInterval);
    pauseEnabled = false;
}

//enables pausing so that user doesn't reset the counter once it has finished
function enablePause() {
    pauseEnabled = true;
}

//shows button that tracks clicks, updates counter and shows it in HTML,
//starts timers for click interval and pause for reset button
startButton.addEventListener("click", () => {
    startButton.setAttribute("hidden", true);
    countButton.removeAttribute("hidden", true);

    localStorage.setItem("clickCount", 0);
    localStorage.clickCount++;
    counter.textContent = localStorage.clickCount;
    
    setTimeout(disableCount, 10000);
    pauseInterval = setInterval(enablePause, 0);
    setTimeout(pause, 13000)
});

//increments counter when clicking button
countButton.addEventListener("click", () => {
    localStorage.clickCount++;
    counter.textContent = localStorage.clickCount;
});

//resets the counter, updates record if applicable, but only after a brief paused period
//so that the user doesn't reset it immediately while they're trying to click
resetButton.addEventListener("click", () => {
    if (!pauseEnabled) {
        if (localStorage.clickRecord < localStorage.clickCount) {
            localStorage.clickRecord = localStorage.clickCount;
            record.textContent = "Record: " + localStorage.clickRecord;
        }
        resetButton.setAttribute("hidden", true);
        startButton.removeAttribute("hidden", true);
        localStorage.clickCount = 0;
        counter.textContent = localStorage.clickCount;
    }
    
});