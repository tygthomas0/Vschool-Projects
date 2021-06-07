var fizzCount = 0;
var buzzCount = 0;
var fizzbuzzCount = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
        fizzbuzzCount++;
    }
    else if (i % 3 == 0) {
        console.log("fizz");
        fizzCount++;
    }
    else if (i % 5 == 0) {
        console.log("buzz");
        buzzCount++;
    }
    else {
        console.log(i);
    }
}

function Counter(fizz, buzz, fizzbuzz) {
    this.fizz = fizz,
    this.buzz = buzz,
    this.fizzbuzz = fizzbuzz
}

var counters = new Counter(fizzCount, buzzCount, fizzbuzzCount);

console.log(counters);