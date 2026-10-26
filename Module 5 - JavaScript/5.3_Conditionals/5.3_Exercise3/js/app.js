const a = 20;

// If a is divisible by 3 & 5, print FizzBuzz
// If a is divisible by 3 only, print Fizz
// If a is divisible by 5 only, print Buzz
// Prints invalid input if input is not a number
// Prints the number if it's not divisible by any of the options.
if (a % 3 === 0 && a % 5 === 0) {
  console.log("FizzBuzz");
} else if (a % 3 === 0) {
  console.log("Fizz");
} else if (a % 5 === 0) {
  console.log("Buzz");
} else if (typeof a !== "number") {
  console.log("invalid input");
} else {
  console.log(a);
}


