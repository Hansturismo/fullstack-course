function largerThan(num1, num2) {
  let message = `Out of ${num1} and ${num2},`;
  if (num1 > num2) {
    return `${message} ${num1} is the bigger number`;
  } else if (num1 == num2) {
    return "Equal numbers";
  } else {
    return `${message} ${num2} is the bigger number`;
  }
}

let num1 = 8;
let num2 = 10;

console.log(largerThan(num1, num2));
