function checkIfPrime (number) {
   for (i = 2; i < number; i++) {
        if (number % i == 0) {
            return `${number} is not a Prime number.`
        }
    return `${number} is a Prime number.`
   }
    
}

console.log(checkIfPrime(19));