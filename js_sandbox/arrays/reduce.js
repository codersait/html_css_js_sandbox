const numbers = [1, -1, 2, 3];

// Calculate the sum of array values

// First way
let sum = 0;
for (const number of numbers) {
  sum += number;
}
console.log(sum);
// Second Way
// Reduce: Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// with initial accumulator value
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5 --> sum = 0
// ------------------------------
// without initial accumulator value
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5 --> sum = 0

let sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
let sum3 = numbers.reduce((acc, curr) => acc + curr);

console.log(sum2);
console.log(sum3);
