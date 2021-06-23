//replaced all of the var with let and const

const name = "John";
let age = 101;

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


//practicing arrow functions

//rewriting .map to be an arrow function
const carrots = ["bright orange", "ripe", "rotten"];
function mapVegetables(arr) {
    return arr.map(carrot => { return { type: "carrot", name: carrot } });
}
console.log(mapVegetables(carrots));

//rewriting .filter to be an arrow function
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly);
}
console.log(filterForFriendly(people));


//rewriting math operators to arrow functions
doMathSum = (a, b) => a + b;
console.log(doMathSum(2, 3));

produceProduct = (a, b) => a * b;
console.log(produceProduct(2, 3));

//write a function that takes first and last name and age and returns a message
printString = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
console.log(printString("Tyler", "Thomas", 20));

//turn the filter into one line
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];
 
filterForDogs = arr => arr.filter(animal => (animal.type == "dog") ? true : false);
console.log(filterForDogs(animals));

//use template literals to write a function with a message based on name and location
travelMessage = (name, location) => `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;
console.log(travelMessage("Tyler", "Poland"));