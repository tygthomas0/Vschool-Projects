var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayMethodPractice(arr1, arr2) {
    arr2.pop();
    arr1.shift();
    var orangeIndex = arr1.indexOf("orange");
    arr1.push(orangeIndex);
    var lengthOfVegetable = arr2.length;
    arr2.push(lengthOfVegetable);
    var food = arr1.concat(arr2);
    food.splice(4, 2);
    food.reverse();
    var foodString = food.join();
    console.log(foodString);
}

arrayMethodPractice(fruit, vegetables);