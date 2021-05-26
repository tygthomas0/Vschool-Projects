const readline = require('readline-sync');

var userNum1;
var userNum2;
var operation;

operation = readline.question("What operation do you want to perform? [add], [sub]tract, [mul]tiply, [div]ide ? ");

if (operation === "add") {
    userNum1 = readline.questionInt("What is your first number? ");
    userNum2 = readline.questionInt("What number do you want to add to " + userNum1 + "? ");
}
else if (operation === "sub") {
    userNum1 = readline.questionInt("What is your first number? ");
    userNum2 = readline.questionInt("What number do you want to subtract from " + userNum1 + "? ");
}
else if (operation === "mul") {
    userNum1 = readline.questionInt("What is your first number? ");
    userNum2 = readline.questionInt("What number do you want to multiply " + userNum1 + " by? ");
}
else if (operation === "div") {
    userNum1 = readline.questionInt("What is your first number? ");
    userNum2 = readline.questionInt("What number do you want to divide " + userNum1 + " by? ");
}

function calculator(num1, num2, op) {
    var answer;
    if (op === "add") {
        answer = num1 + num2;
        console.log(num1 + " + " + num2 + " = " + answer);
    }
    else if (op === "sub") {
        answer = num1 - num2;
        console.log(num1 + " - " + num2 + " = " + answer);
    }
    else if (op === "mul") {
        answer = num1 * num2;
        console.log(num1 + " * " + num2 + " = " + answer);
    }
    else if (op === "div") {
        answer = num1 / num2;
        console.log(num1 + " / " + num2 + " = " + answer);
    }
}

calculator(userNum1, userNum2, operation);