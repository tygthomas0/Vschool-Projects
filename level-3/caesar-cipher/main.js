var readline = require("readline-sync")
var input = readline.question("What phrase would you like to encrypt? ").toLowerCase()
var shift = parseInt(readline.question("How many letters would you like to shift the phrase by? "))

function isCharacterALetter(char) {
    return (/[a-z]/).test(char)
}

var alphabet = "abcdefghijklmnopqrstuvwxyz"

var cipher = input.split("")
for (let i = 0; i < cipher.length; i++) {
    var index;
    
    if (isCharacterALetter(cipher[i])) {
        if (alphabet.indexOf(cipher[i]) + shift > 25) {
            index = alphabet.indexOf(cipher[i]) + shift - 26
        }
        else {
            index = alphabet.indexOf(cipher[i]) + shift
        }
        cipher[i] = alphabet[index]
    }
}
var joinedCipher = cipher.join("")

console.log(joinedCipher)