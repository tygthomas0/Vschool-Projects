const form = document["totals"];

form.addEventListener("submit", event => {
    event.preventDefault();
    let goombaTotal = form.goombaTotal.value * 5;
    let bobombTotal = form.bobombTotal.value * 7;
    let cheepTotal = form.cheepTotal.value * 11;
    let total = goombaTotal + bobombTotal + cheepTotal;
    document.getElementById("costOutput").innerText = total + " coins";
});