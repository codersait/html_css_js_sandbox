const numbers = [2, 3, 1];
numbers.sort();
numbers.reverse();

/* compareFn — Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.*/

// First Example
const numbers2 = [11, 2, 22, 1];
const sorted = numbers2.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

//Second Example
const courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'javaScript' },
];

const sortedCourses = courses.sort((a, b) => {
  // a<b => -1
  // a>b => 1
  // a===b => 0

  if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
  if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
  return 0;
});
