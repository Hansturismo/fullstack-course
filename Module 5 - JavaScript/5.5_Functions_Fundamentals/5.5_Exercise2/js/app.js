// I'm pretty sure this isn't what the assignment asked for, but it was fun to do nontheless.
// This mess creates to lists,
// adds each number that is divisible by 2 OR 5 to their respective lists,
// then sum those lists together and returns the total.
function divisibleBy2And5(limit) {
  const divisible2 = [];
  const divisible5 = [];

  for (i = 1; i <= limit; i++) {
    if (i % 2 == 0) {
      divisible2.push(i);
    }
    if (i % 5 == 0) {
      divisible5.push(i);
    }
  }
  console.log(divisible2);
  console.log(divisible5);
  let sum1 = 0;
  let sum2 = 0;
  for (i of divisible2) {
    sum1 += i;
  }
  for (i of divisible5) {
    sum2 += i;
  }
  const total = sum1 + sum2;

  return Number(total);
}

// console.log(divisibleBy2And5(6));

// Let's try doing what the assignment actually wants

function actuallyDivisibleBy2And5(limit) {
  let sum = 0;
  for (i = 1; i <= limit; i++) {
    if (i % 2 == 0 && i % 5 == 0) {
      sum += i;
    }
    // console.log(sum);
  }
  return Number(sum);
}
let limit = 20;

console.log(
  `The added sum of numbers that's divisible between 2 and 5 is ${actuallyDivisibleBy2And5(limit)},
with ${limit} as input`,
);
