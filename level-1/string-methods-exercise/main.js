var testString = "Hello";

//takes a string, makes it uppercase, makes it lowercase, returns a string with the upper and lower case string combined
function capitalizeAndLowercase(string) {
    var stringUpper = string.toUpperCase();
    var stringLower = string.toLowerCase();
    var combinedString = stringUpper.concat(stringLower);

    console.log(combinedString);
    return combinedString;
}
capitalizeAndLowercase(testString);

//returns the length of the first half of a string
function halfStringLength(string) {
    var stringArr = string.split("");

    var stringLen = Math.floor(stringArr.length / 2);

    //console.log(stringLen);
    return stringLen;
}
halfStringLength(testString);

//returns the first half of a string
function halfString(string) {
    var stringLen = halfStringLength(string);
    var firstHalf = string.slice(0, stringLen);

    console.log(firstHalf);
    return firstHalf;
}
halfString(testString);

//returns a string with the first half uppercase and the second half lowercase
function halfCapHalfLower(string) {
    var stringLen = halfStringLength(string);
    var firstHalf = string.slice(0, stringLen).toUpperCase();
    var secondHalf = string.slice(stringLen, string.length).toLowerCase();

    var combined = firstHalf.concat(secondHalf);

    console.log(combined);
    return combined;
}
halfCapHalfLower(testString);


var testSentence = "hey friends! practice practice practice!";

//takes a string and returns it with all words capitalized
function capAfterSpace(string) {
    var sentenceChars = string.split("");

    sentenceChars[0] = sentenceChars[0].toUpperCase();
    for (var i = 0; i < sentenceChars.length; i++) {
        if (sentenceChars[i] == " " && i != (sentenceChars.length - 1)) {
            console.log("space");
            sentenceChars[i+1] = sentenceChars[i+1].toUpperCase();
        }
    }

    var capSentence = sentenceChars.join("");

    console.log(capSentence);
    return capSentence;
}
capAfterSpace(testSentence);