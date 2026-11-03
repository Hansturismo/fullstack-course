let sum = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sum = i + sum;
  }
}
console.log("Total", sum);
