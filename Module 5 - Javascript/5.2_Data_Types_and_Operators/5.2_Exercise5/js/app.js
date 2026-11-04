const a = 20;
const b = 15;
console.log(a > b);
// Output: true
// Because 20 is more than 15 (a > b)

const c = 20;
const d = 20;
console.log(c == d);
// or if you want to make sure the type is the same too:
console.log(c === d);
// Output: true
// Because c and d is both equal in value and type

const e = 10;
const f = 25;
console.log(e < f);
// Output: true
// Because 10 is less than 25 (e < f)

const g = "30";
const h = 30;
console.log(g !== h);
// Output: true
// Because g is NOT the same type as h

const i = 20;
const j = 15;
console.log(i > j) && (j < i);
// Output: true
// Because i is more than j AND j is less than i

const m = 5;
console.log(!(m > 10));
// Output: true
// Because m is NOT more than 10. Without the NOT=! operator, you'd ask "Is m more than 10?" and you'd get false,
// because 5 is obviously less than 10. 