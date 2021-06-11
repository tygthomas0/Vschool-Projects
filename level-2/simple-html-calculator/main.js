const addForm = document["addForm"];
const subForm = document["subForm"];
const mulForm = document["mulForm"];

function add(num1, num2) {
    return Number(num1) + Number(num2);
}
function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}
function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}


addForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let answer = add(addForm.add1.value, addForm.add2.value);
    document.getElementById("addAnswer").innerText = answer;
    addForm.add1.value = "";
    addForm.add2.value = "";
});

subForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let answer = subtract(subForm.sub1.value, subForm.sub2.value);
    document.getElementById("subAnswer").innerText = answer;
    subForm.sub1.value = "";
    subForm.sub2.value = "";
});

mulForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let answer = multiply(mulForm.mul1.value, mulForm.mul2.value);
    document.getElementById("mulAnswer").innerText = answer;
    mulForm.mul1.value = "";
    mulForm.mul2.value = "";
});