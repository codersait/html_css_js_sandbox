const numbers = [1, 2, 3, 4];

// First way
const includes = (array, searchElement) => {
  for (const item of array) {
    if (item === searchElement) {
      return true;
    }
  }
  return false;
};

// Second Way
const includes = (array, searchElement) => {
  return array.indexOf(searchElement) !== -1;
};
