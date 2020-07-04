const getMax = array => {
  if (array.length === 0) return undefined;
  let max = array[0];
  for (const item of array) {
    if (item > max) {
      max = item;
    }
  }
  return max;
};
const getMax = array => {
  if (array.length === 0) return undefined;
  return array.reduce((acc, curr) => (acc > curr ? acc : curr));
};

const numbers = [1, 100, 3];

console.log(getMax(numbers));
