//1 - doubles numbers
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

let testArray = [2, 5, 100];
let result = doubleNumbers(testArray);
console.log("First Exercise:\n" + result);

//2 - turns numbers into strings
function stringItUp(arr) {
    return arr.map(num => String(num));
}
let secondResult = stringItUp(testArray);
console.log("\nSecond Exercise:\n" + secondResult);
console.log(typeof secondResult[1]);

//3 - capitalizes first letter of names and makes the rest lowercase
function capitalizeNames(arr) {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}
let nameArray = ["carl", "JERRY", "dAvE", "JoHn"];
let nameResult = capitalizeNames(nameArray);
console.log("\nThird Exercise:\n" + nameResult);

//4 - takes an array of 'people' objects and returns the names
function namesOnly(arr) {
    return arr.map(person => person.name);
}
let personArray = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
let personResult = namesOnly(personArray);
console.log("\nFourth Exercise:\n" + personResult);

//5 - checks age of people in 'people' array, says whether they are old enough to see The Matrix
function matrixStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 18) {
            arr[i].message = arr[i].name + " can go to The Matrix.";
        }
        else {
            arr[i].message = arr[i].name + " is under age.";
        }
    }
    return arr.map(person => person.message);
};
let matrixResult = matrixStrings(personArray);
console.log("\nFifth Exercise:\n" + matrixResult);

//6 - puts name and age of people in header tags to insert into HTML
function readyToPutInTheDOM(arr) {
    return arr.map(person => "<h1>" + person.name + "</h1><h2>" + person.age + "</h2>");
}
let domResult = readyToPutInTheDOM(personArray);
console.log("\nSixth Exercise:\n" + domResult);