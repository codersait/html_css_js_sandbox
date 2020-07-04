// First solution
const countOccurrences = (array, searchElement) => {
  let count = 0;
  for (const item of array) {
    if (item === searchElement) {
      count++;
    }
  }
  return count;
};

// Second solution
const countOccurrences = (array, searchElement) => {
  return array.reduce((acc, curr) => {
    if (curr === searchElement) {
      acc++;
    }
    return acc;
  }, 0);
};

// reduce another implementation
const countOccurrences = (array, searchElement) => {
  return array.reduce((acc, curr) => {
    const occurence = curr === searchElement ? 1 : 0;
    return acc + occurence;
  }, 0);
};

const numbers = [1, 2, 3, 4, 2, 2];

console.log(countOccurrences(numbers, 2));
