const person = {
  name: 'sait',
  age: 36,
};
const car = {
  color: 'green',
  brand: 'bmw',
  count: 20,
};

const obj = {
  hello: 'merhaba',
};
// First way -- for in
for (const key in person) {
  obj[key] = person[key];
}
//console.log(obj);
console.log('-------------');

// Second Way -- Object.assign()
const obj2 = Object.assign({}, person, car);
//console.log(obj2);

// Third Way -- Elegant Way -- Spread operator
const obj3 = { ...person, ...car };
console.log(obj3);
