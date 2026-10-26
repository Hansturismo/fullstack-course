const a = 61561;
let evenNumber = null;


if (a % 2 === 0) {
  evenNumber = true;
} else if (a % 2 === 1) {
  evenNumber = false;
}

const message = evenNumber ? "Even" : "Odd";

console.log(message);
