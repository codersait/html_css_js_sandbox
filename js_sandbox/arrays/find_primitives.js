// Finding Elements (Primitives)
const numbers = [1, 2, 3, 1, 4];

numbers.indexOf(1); //Returns the index of the first occurrence. if it is not -1, it exists
numbers.lastIndexOf(1); ////Returns the index of the last occurrence. if it is not -1, it exists
numbers.includes(3); //returns True or False

// Finding Elements (Objects)
// Represents a predicate (boolean-valued function) of one argument.
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

// Find method
// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const course = courses.find((course) => course.name === 'a');
console.log(course);

// FindIndex Method
// Returns the index of the first element in the array where predicate is true, and -1 otherwise.
const courseIndex = courses.findIndex((course) => course.name === 'b');
console.log(courseIndex);
