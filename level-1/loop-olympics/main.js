// preliminaries
for (var i = 0; i <= 9; i++) {
    console.log(i);
}
console.log("new loop");
for (var i = 9; i >= 0; i--) {
    console.log(i);
}
console.log("new loop");
const fruit = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
console.log("new loop");
// bronze medal
var zeroToNine = [];
for (var i = 0; i <= 9; i++) {
    zeroToNine.push(i);
}
console.log(zeroToNine);
console.log("new loop");

for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("new loop");

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (var i = 0; i < fruits.length; i++) {
    if (i % 2 == 0) {
        console.log(fruits[i]);
    }
}
console.log("new loop");
//silver medal
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

var names = [];
var occupations = [];
for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);
console.log("new loop");

var evenNames = [];
var oddOccupations = [];

for (var i = 0; i < peopleArray.length; i++) {
    if (i % 2 == 0) {
        evenNames.push(peopleArray[i].name);
    }
    else {
        oddOccupations.push(peopleArray[i].occupation);
    }
}
console.log(evenNames);
console.log(oddOccupations);
console.log("new loop");

// gold medal
var arrayNestZero = [];
for (var i = 0; i < 3; i++) {
    var zeroArray = [];
    for (var j = 0; j < 3; j++) {
        zeroArray.push(0);
    }
    arrayNestZero.push(zeroArray);
}
console.log(arrayNestZero);
console.log("new loop");

var arrayNestOne = [];
for (var i = 0; i < 3; i++) {
    var newArray = [];
    for (var j = 0; j < 3; j++) {
        newArray.push(i);
    }
    arrayNestOne.push(newArray);
}
console.log(arrayNestOne);
console.log("new loop");

var arrayNestTwo = [];
for (var i = 0; i < 3; i++) {
    var newerArray = [];
    for (var j = 0; j < 3; j++) {
        newerArray.push(j);
    }
    arrayNestTwo.push(newerArray);
}
console.log(arrayNestTwo);
console.log("new loop");

for (var i = 0; i < arrayNestTwo.length; i++) {
    for (var j = 0; j < arrayNestTwo[i].length; j++) {
        arrayNestTwo[i][j] = "x";
    }
}
console.log(arrayNestTwo);