function largerThan(num1Prompt, num2Prompt) {
  let message = `Out of ${num1Prompt} and ${num2Prompt},`;
  if (num1Prompt > num2Prompt) {
    return `${message} ${num1Prompt} is the bigger number`;
  } else if (num1Prompt == num2Prompt) {
    return "Equal numbers";
  } else {
    return `${message} ${num2Prompt} is the bigger number`;
  }
}

let num1Prompt = Number(prompt("Enter first number"));
let num2Prompt = Number(prompt("Enter second number"));

alert(largerThan(num1Prompt, num2Prompt));
