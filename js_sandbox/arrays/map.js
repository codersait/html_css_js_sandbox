const numbers = [1, -2, 2, 3];

// Map: Calls a defined callback function on each element of an array, and returns an array that contains the results. Returns new Array.
const html =
  '<ul>' +
  numbers
    .filter(n => n >= 0)
    .map(n => `<li>${n}</li>`)
    .join('') +
  '</ul>';
console.log(html);

const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];

const mappedObj = objects
  .filter(obj => obj.id > 1)
  .map(obj => ({ id: obj.id * 2 }));

console.log(filteredObj);
