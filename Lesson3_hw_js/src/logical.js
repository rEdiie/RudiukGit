let a = 10;
let b = '10';
let c = true;

console.log(a == b);
console.log(a === b);
console.log(a == c);
console.log(a === c);
console.log(a != b);
console.log(a != c);
console.log(a !== b);
console.log(a !== c);

a = 2;
b = '5';
c = false;

console.log(a > b);
console.log(a > c);
console.log(a < 5);
console.log(a < c);
console.log(a >= b);
console.log(a >= 7);
console.log(a <= b);
console.log(a <= c);

a = 'str1';
b = 'str2';

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


const d = 5;
const f = '8';

console.log(d > f && f >= 8);
console.log(d < f && f >= 8);

console.log(d > f || f >= 8);
console.log(d < f || f >= 8);
console.log(d > f || f < 8);
console.log((d > f || f < 8) && true);

console.log(!(d > f));
console.log(!(d < f));
