const a = 25;
const b = 80;
const c = 25;

if (a > b) {
  console.log("a is greater than b");
}

if (b > a) {
  console.log("b is greater than a");
}

if (a < b || a == c) {
  console.log(true);
}

if (a == b && a == c && b == a && b == c && c == a && c == b) {
  console.log(true);
} else {
  console.log(false);
}
