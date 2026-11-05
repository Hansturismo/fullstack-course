function FirstLast(array) {
  let first = null;
  let last = null;
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      first = array[i];
    }
    if (i == array.length - 1) {
      last = array[i];
    }
  }
  const result = [first, last];
  console.log(first, last);
  return result;
}

function FirstLastV2(array) {
  let first = array[0];
  let last = array[array.length - 1];
  const result = [first, last];
  console.log(first, last);
  return result;
}

const array1 = [10, 20, 30, 40, 90];
const array2 = [5, 99, 1];
const array3 = [7, 8];

FirstLast(array1);
FirstLast(array2);
FirstLast(array3);

FirstLastV2(array1);
FirstLastV2(array2);
FirstLastV2(array3);
