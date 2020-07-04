// Testing the elements on Array

const numbers = [-1, 2, 3];

// Every --> Determines whether all the members of an array satisfy the specified test. Returns boolean
const allPositive = numbers.every((number) => {
  return number >= 0;
});
console.log(allPositive);
// Some --> Determines whether the specified callback function returns true for any element of an array. Returns boolean.
const atLeastOne = numbers.some((number) => {
  return number >= 0;
});
console.log(atLeastOne);
