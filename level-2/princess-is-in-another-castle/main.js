const readline = require("readline-sync");

class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name,
        this.totalCoins = totalCoins,
        this.status = status,
        this.hasStar = hasStar
        this.gameActive = gameActive;
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if (this.hasStar) {
            console.log("Your star protected you!");
            this.hasStar = false;
        }
        if (this.status == "Powered Up") {
            this.status = "Big";
            console.log(`You got hit!`);
        }
        else if (this.status == "Big") {
            this.status = "Small";
            console.log(`You got hit!`);
        }
        else if (this.status == "Small") {
            this.status = "Dead";
            console.log(`You got hit!`);
            this.gameActive = false;
        }
    }

    gotPowerup() {
        this.hasStar = false;
        if (this.status == "Powered Up") {
            this.hasStar = true;
        }
        else if (this.status == "Big") {
            this.status = "Powered Up";
        }
        else if (this.status == "Small") {
            this.status = "Big";
        }
        console.log(`You got a powerup!`);
    }

    addCoin() {
        this.totalCoins++;
        console.log(`You got a coin!`);
    }

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nHas Star: ${this.hasStar}\nCoins: ${this.totalCoins}\n`)
    }
}


const playerName = readline.question("Do you want to be Mario of Luigi? ");
const playerOne = new Player(playerName, 0, "Small", false, true);
var gameIsLive;
console.log(`You picked ${playerOne.name}!`);

function gameEvent() {
    let event = Math.floor(Math.random() * 3);
    playerOne.print();
    if (event == 0) {
        playerOne.gotHit();
        if (playerOne.status == "Dead") {
            console.log(`You died!`);
            clearInterval(gameIsLive);
        }
    }
    else if (event == 1) {
        playerOne.gotPowerup();
    }
    else {
        playerOne.addCoin();
    }
}

function game() {
    gameIsLive = setInterval(gameEvent, 1000);
}

game();