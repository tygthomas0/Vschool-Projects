var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(peopleArr, alphabetArr) {
    var peopleAlphabet = [];
    var alphabetArray = alphabetArr.split("");

    for (var i = 0; i < peopleArr.length; i++) {
        peopleAlphabet.push(peopleArr[i]);
        for (var j = 0; j < alphabetArray.length; j++) {
            peopleAlphabet.push(alphabetArr[j]);
        }
    }

    console.log(peopleAlphabet);
}

forception(people, alphabet);