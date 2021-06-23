//es6 challenges based on ski slope difficulties

//green dot

//use rest operator to make this function return an array no matter how many animals are passed to it
function collectAnimals(...animalList) {
    let animals = [];
    for (let i = 0; i < animalList.length; i++) {
        animals.push(animalList[i]);
    }
    return animals;
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

//write a function that returns a food object with the array names as properties
function combineFruit(fruit, sweets, vegetables) {
    return { fruit: fruit, sweets: sweets, vegetables: vegetables };
}
console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));

//destructure an object to be used as parameters in a function
const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

function parseSentence({location, duration}) {
    return `We're going to have a good time in ${location} for ${duration}`;
}
console.log(parseSentence(vacation));

//use destructuring to make this code ES6
function returnFirst(items) {
    const [firstItem] =  items;
    return firstItem;
}
console.log(returnFirst(["apple", "banana", "pear"]));

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}
console.log(returnFavorites(favoriteActivities));


//blue square

//use rest and spread operator to take any number of arrays and combine them in a function
function combineAnimals(...arrList) {
    var combined = [];
    for (let i = 0; i < arrList.length; i++) {
        combined = combined.concat(arrList[i]);
    }
    return combined;
}
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));


//black diamond

//make the following function with ES6
product = (...nums) => nums.reduce((acc, number) => acc * number, 1);
console.log(product(1, 2, 3, 4, 5));

unshift = ([...arr], ...nums) => nums.concat(arr);
console.log(unshift([6, 7, 8, 9], 1, 2, 3, 4, 5));


//double black diamond

//use destructuring to make the code look nicer
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        
        var [firstName, lastName] = name;
        return { firstName: firstName, lastName: lastName };
    });
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));