function checkIfExists(array, numberToSearchFor) {
  console.log(`Number we're looking for: ${numberToSearchFor}`);
  console.log(`Array to search: ${array}`);
  console.log(
    `----------------------------------------Starting to look-----------------------------------------`,
  );
  let result;
  for (let i = 0; i < array.length; i++) {
    console.log(`Is the number on index ${i}?`);
    console.log(`Value: ${array[i]}`);

    if (numberToSearchFor == array[i]) {
      result = [true, `Yes, number ${numberToSearchFor} was on index ${i}`];
      return result;
    } else if (numberToSearchFor != array[i]) {
      console.log(`No`);
    }
  }
  result = [false, `No, number ${numberToSearchFor} was not present in list`];
  return result;
}

console.log(checkIfExists([10, 20, 30, 40], 20));
console.log(checkIfExists([5, 8, 12], 7));
console.log(checkIfExists([1, 2, 3, 4], 4));
