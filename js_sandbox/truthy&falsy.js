// Falsy Values
// null
// undefined
// 0
// ''
// NaN
// false
/********Proving************/
/*if (0) {
  console.log(`0 is truthy`);
} else {
  console.log(`0 is falsy`);
}
if (1) {
  console.log(`positive numbers are truthy`);
}
if (-1) {
  console.log(`negative numbers are truthy`);
}
if (undefined) {
  console.log(`undefined is truthy`);
} else {
  console.log(`undefined is falsy`);
}
if (null) {
  console.log(`null is truthy`);
} else {
  console.log(`null is falsy`);
}
if ('sait') {
  console.log(`strings are truthy`);
}
if ('') {
  console.log(` "" is truthy`);
} else {
  console.log(`'' is falsy`);
}

if (NaN) {
  console.log(`NaN is truthy`);
} else {
  console.log(`NaN is falsy`);
}
if (false) {
  console.log(`false is truthy`);
} else {
  console.log(`false is falsy`);
  */
function countTruthy(array) {
  let count = 0;
  for (const item of array) {
    if (item) {
      count++;
    }
  }
  return count;
}
const array = [undefined, 1, -1, null, 'sait', '', NaN, false, true, 0];
let result = countTruthy(array);
console.log(result);
