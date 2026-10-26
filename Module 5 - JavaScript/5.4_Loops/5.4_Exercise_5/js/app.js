const numbers = [4, 9, 12, 7, 15, 22, 18, 5];
let sum = 0;

for (let i of numbers) {
  if (i % 3 == 0) {
    sum += i;
    console.log("Divisible by 3 =", i);
  }
}
console.log("Divisible numbers total:", sum);
