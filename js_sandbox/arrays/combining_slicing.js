const first = [1, 2, 3];
const second = [4, 5, 6];
// first way
const combined = first.concat(second);
// second way
const combined = [...first, 'a', ...second, 'b'];

const slice = combined.slice(2, 4); // 2 inclusive 4 exclusive
const slice2 = combined.slice(2); // from 2 to the end
// first
const copy = combined.slice(); // copy of array
// second
const copy = [...combined];
