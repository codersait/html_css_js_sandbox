const numbers = [3, 4];

// Add to End
//Appends new elements to an array, and returns the new length of the array.
const pushed = numbers.push(5, 6); //returns new length of the array --> = 4

// Add to the Beginning

// Inserts new elements at the start of an array and returns the new length of the array.
const unshifted = numbers.unshift(1, 2); //returns new length of the array --> = 6

// Add to Anywhere

const spliced = numbers.splice(2, 0, 'a', 'b'); //returns deleted elements in an array in here -->[]
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
