//uses spread to take an array of numbers of any size and find the largest number amongst them
function largest(...nums) {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    console.log("The largest number in " + nums + " is " + largest + ".");
    return largest;
}

largest(3, 4, 5, 2, 1);

//checks to see if a number is evenly divisible by another number
function isDivisible(num1, num2) {
    if (num1 % num2 == 0) {
        console.log(num1 + " is divisible by " + num2 + ".");
    }
    else {
        console.log(num1 + " is not divisible by " + num2 + ".");
    }
}

isDivisible(4, 2);
isDivisible(9, 3);
isDivisible(15, 4);

//checks to see if a string has a particular character within the string, using an array of strings with spread
function hasChar(char, ...strings) {
    var pos = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].indexOf(char) != -1) {
            pos.push(strings[i]);
        }
    }
    console.log("These strings " + pos + " have the character '" + char + "' in them.")
}

hasChar("a", "abc", "a;lske", "joinl;s", "corn");