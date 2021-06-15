const counter = document.getElementById("counter");

//initializes counter
let count = localStorage.clickCounts;
if (count == undefined || count == null || count == NaN) {
    counter.textContent = 0;
}
else {
    counter.textContent = localStorage.clickCounts;
}

//increments counter and updates HTML whenever the body is clicked
document.body.addEventListener("click", () => {
    count++;
    localStorage.setItem("clickCounts", count);
    counter.textContent = localStorage.getItem("clickCounts");
});