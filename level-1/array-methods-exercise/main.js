var fruit1 = ["banana", "apple", "orange", "watermelon"]
var fruit2 = ["banana", "apple", "orange", "watermelon"]
function test(arr1, arr2) {
    var test1 = arr1
    var test2 = arr2

    test1.splice(0, 1)
    console.log(test1)
    test2.splice(1, 1)
    console.log(test2)
}
test(fruit1, fruit2)


/*
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

arrayMethodPractice(fruit, vegetables);*/