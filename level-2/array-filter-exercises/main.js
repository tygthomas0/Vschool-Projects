//1 - returns numbers that are >= 5
let numArray = [3, 6, 8, 2];

function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num >= 5);
}
let result = fiveAndGreaterOnly(numArray);
console.log("First Exercise:\n" + result);

//2 - returns even numbers
function evensOnly(arr) {
    return arr.filter(num => num % 2 == 0);
}
let evenResult = evensOnly(numArray);
console.log("\nSecond Exercise:\n" + evenResult);

//3 - returns strings that are <= 5 characters long
let strArray = ["dog", "wolf", "by", "family", "eaten", "camping"];

function fiveCharsOrFewerOnly(arr) {
    return arr.filter(str => str.length <= 5);
}
let strResult = fiveCharsOrFewerOnly(strArray);
console.log("\nThird Exercise:\n" + strResult);

//4 - returns everyone who is a "member of the club"
let peopleArray = [
    { name: "Angelina Jolie", age: 80, member: true },
    { name: "Eric Jones", age: 2, member: false },
    { name: "Paris Hilton", age: 5, member: true },
    { name: "Kayne West", age: 16, member: false },
    { name: "Bob Ziroll", age: 100, member: true }
];

function clubMember(arr) {
    return arr.filter(person => person.member);
}
let memberResult = clubMember(peopleArray);
console.log("\nFourth Exercise:\n" + memberResult);

//5 - checks age of people to see whether they are old enough to see The Matrix
function oldEnoughToSeeMatrix(arr) {
    return arr.filter(person => person.age >= 18);
}
let ageResult = oldEnoughToSeeMatrix(peopleArray);
console.log("\nFifth Exercise:\n" + ageResult);