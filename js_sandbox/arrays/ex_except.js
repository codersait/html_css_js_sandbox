const numbers = [1, 2, 3, 4, 1, 2];

// First way
const except = (array, excluded) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < excluded.length; j++) {
      if (array[i] === excluded[j]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

// Second way

const except = (array, excluded) => {
  const output = [];
  for (const item of array) {
    if (!excluded.includes(item)) {
      output.push(item);
    }
  }
  return output;
};

const output = except(numbers, [3, 1]);
console.log(output);
