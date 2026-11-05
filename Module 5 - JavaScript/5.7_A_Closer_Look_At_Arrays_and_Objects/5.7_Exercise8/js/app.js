function largestInList(array) {
  let biggestValue = null;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > biggestValue) {
      biggestValue = array[i];
    }
    // console.log(array[i]);
  }
  console.log(biggestValue);
  return biggestValue;
}

const array1 = [10, 5, 8, 22, 3];
const array2 = [1, 99, 23, 45];
const array3 = [7, 7, 7, 7];

largestInList(array1);
largestInList(array2);
largestInList(array3);
