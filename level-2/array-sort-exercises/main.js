//using .sort() to do things

//sort an array from smallest to largest
function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//sort an array from largest to smallest
function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//sort an array from shortest string to longest
function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

//sort an array alphabetically
function alphabetical(arr) {
    return arr.sort();
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

//sort objects in array by age
function byAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));