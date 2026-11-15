function checkIfPrime(number) {
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      return `${number} is not a prime number`;
    }
  }
  return `${number} is a prime number`;
}

console.log(checkIfPrime(22));
console.log(checkIfPrime(23));
