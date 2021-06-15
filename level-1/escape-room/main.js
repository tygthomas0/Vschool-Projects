const readline = require('readline-sync');

const userName = readline.question("What is your name? ");
var userStatus = true;
var keyStatus = false;
var userChoice;
var cont;
var recursionCount = 0; //used to make it so that only one end message is played if the user continues

//generates random number that determines which story text you get. Every scenario functions the same, just the text and options are different
//comments will only be on first scenario because of this
const storyGenerator = Math.random();

function game(storyNumber) {
    if (0 <= storyNumber && storyNumber < 0.25) {
        console.log(userName + ", one day, you decided to try out the new Escape Room at your local bowling alley. Unbeknownst to you, a deadly spider has gotten loose and is hiding somewhere in the room. You must find the key to the door, also hidden somewhere in the room. Be careful in your search."); //intro text
        while (userStatus) {
            userChoice = readline.question("The room has the exit door, a large, ornate chair, a grandfather clock, and a jagged hole in the wall behind the chair. Where would you like to look? [door] [chair] [clock] [hole] ? "); //options
            if (userChoice === "door" && keyStatus === false) {
                console.log("The door is stuck.");
            }
            else if (userChoice === "door" && keyStatus) {
                console.log("You insert the key into the lock and open the door. You have successfully escaped!");
                break; //ends game if user has found the key
            }
            else if (userChoice === "chair") {
                console.log("You sit in the chair. Nothing happens.");
            }
            else if (userChoice === "clock") {
                console.log("You fiddle around with the clock, and the clockface swings open. The key is inside.");
                keyStatus = true; //user finds the key
            }
            else if (userChoice === "hole") { //death/game over
                console.log("The deadly spider bites your hand when you stick it into the hole. You are dead.");
                cont = readline.question("Would you like to try again with the same story? [yes] [no] ? ");
                //asks user if they want to continue using the same text
                if (cont === "yes") {
                    recursionCount++; //if the recursion count is greater than 0, it doesn't play the end message if they win
                    game(storyGenerator); //starts over using the same text
                }
                else { //if they don't want to continue, they are dead and the game ends
                    userStatus = false;
                }
                break;
            }
            else {
                console.log("Not an option."); //loops back over if they don't put in a valid input
            }
        }
    }
    else if (0.25 <= storyNumber && storyNumber < 0.5) {
        console.log(userName + ", you wake up in a room, with no memory of how you got there. A note is on the ground next to you: 'Find the key to escape the room. But beware my deadly curse! The note is unsigned.");
        while (userStatus) {
            userChoice = readline.question("The room has the exit door, a shelf holding various bottles, a small hole in one of the walls, and a supply cupboard beneath the shelf. Where would you like to look? [door] [shelf] [cupboard] [hole] ? ");
            if (userChoice === "door" && keyStatus === false) {
                console.log("The door is stuck.");
            }
            else if (userChoice === "door" && keyStatus) {
                console.log("You insert the key into the lock and open the door. You have successfully escaped!");
                break;
            }
            else if (userChoice === "shelf") {
                console.log("The key is in one of the bottles. You easily dump it out of the bottle and into your hand.");
                keyStatus = true;
            }
            else if (userChoice === "cupboard") {
                console.log("The cupboard is filled with many bottles similar to the ones on the shelf. They are all empty.");
            }
            else if (userChoice === "hole") {
                console.log("The curse of the hole claims your soul. You are dead.");
                cont = readline.question("Would you like to try again with the same story? [yes] [no] ? ");
                if (cont === "yes") {
                    recursionCount++;
                    game(storyGenerator);
                }
                else {
                    userStatus = false;
                }
                break;
            }
            else {
                console.log("Not an option.")
            }
        }
    }
    else if (0.5 <= storyNumber && storyNumber < 0.75) {
        console.log(userName + ", you are exploring an ancient temple in search of treasure. You have encountered many booby traps along the way, but have been able to avoid them all. You walk into the next room, and the passageway you just came from has been sealed by a large boulder from the previous trap. There is a door with a large lock on it. Find the key in the room to escape.");
        while (userStatus) {
            userChoice = readline.question("The room has the exit door, a pile of rubble, a mess of vines climbing up the wall, and a large, cracked hole in the wall. Where would you like to look? [door] [rubble] [vines] [hole] ? ");
            if (userChoice === "door" && keyStatus === false) {
                console.log("The door is stuck.");
            }
            else if (userChoice === "door" && keyStatus) {
                console.log("You insert the key into the lock and open the door. You have successfully escaped!");
                break;
            }
            else if (userChoice === "rubble") {
                console.log("You try to move some of the rubble around, but it is far too heavy for you.");
            }
            else if (userChoice === "vines") {
                console.log("You discover that the vines are growing around a small key. You pull them apart and take the key.");
                keyStatus = true;
            }
            else if (userChoice === "hole") {
                console.log("You stick your hand in the hole and feel something tighten around your wrist. You struggle to get out, but are trapped. The final booby trap has claimed you. You starve to death.");
                cont = readline.question("Would you like to try again with the same story? [yes] [no] ? ");
                if (cont === "yes") {
                    recursionCount++;
                    game(storyGenerator);
                }
                else {
                    userStatus = false;
                }
                break;
            }
            else {
                console.log("Not an option.");
            }
        }
    }
    else if (storyNumber >= 0.75) {
        console.log(userName + ", you are out hiking and accidentally fall down a large hole that suddenly appeared in front of you. When you recover, you find yourself in a small chamber with a grand wooden and gold door. You feel a presence, and it tells you to find the key to the door and it will grant you untold riches.");
        while (userStatus) {
            userChoice = readline.question("The room has the exit door, a large hole, a medium hole, and a small hole in the walls. Where would you like to look? [door] [large] [medium] [small] ? ");
            if (userChoice === "door" && keyStatus === false) {
                console.log("The door is stuck.");
            }
            else if (userChoice === "door" && keyStatus) {
                console.log("You insert the key into the lock and open the door. You have successfully escaped!");
                break;
            }
            else if (userChoice === "large") {
                console.log("You stick your head in and look around. You can't see anything.");
            }
            else if (userChoice === "medium") {
                console.log("You reach in and feel something cold and metallic - the key.");
                keyStatus = true;
            }
            else if (userChoice === "small") {
                console.log("You have died.");
                cont = readline.question("Would you like to try again with the same story? [yes] [no] ? ");
                if (cont === "yes") {
                    recursionCount++;
                    game(storyGenerator);
                }
                else {
                    userStatus = false;
                }
                break;
            }
        }
    }
    recursionCount--; //removes recursion counter for every loop, ending at 0 on the last loop through
    if (recursionCount === 0) { //plays message only in original loop through
        console.log("Thanks for playing!"); 
    }
}

game(storyGenerator);