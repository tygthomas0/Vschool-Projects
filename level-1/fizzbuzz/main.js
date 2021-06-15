//counters for each phrase
var fizzCount = 0;
var buzzCount = 0;
var fizzbuzzCount = 0;

//loops over numbers 1-100
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) { //if number is divisible by both 3 and 5, it is replaced with "fizzbuzz"
        console.log("fizzbuzz");
        fizzbuzzCount++;
    }
    else if (i % 3 == 0) { //if number is divisible by only 3, it is replaced with "fizz"
        console.log("fizz");
        fizzCount++;
    }
    else if (i % 5 == 0) { //if number is divisible by only 5, it is replaced with "buzz"
        console.log("buzz");
        buzzCount++;
    }
    else {
        console.log(i);
    }
}

//creates object that keeps track of how many times each phrase was present
function Counter(fizz, buzz, fizzbuzz) {
    this.fizz = fizz,
    this.buzz = buzz,
    this.fizzbuzz = fizzbuzz
}

var counters = new Counter(fizzCount, buzzCount, fizzbuzzCount);

console.log(counters);