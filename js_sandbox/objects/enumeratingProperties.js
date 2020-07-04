let person = {
  name: 'sait',
  age: 36,
  printName() {
    console.log(this.name);
  },
};

for (const item in person) {
  console.log(item);
}
console.log('-----------------');
for (const item of Object.keys(person)) {
  console.log(item);
}
console.log('-----------------');

for (const entry of Object.entries(person)) {
  console.log(entry);
}
console.log('-----------------');
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
console.log('-----------------');
if ('age' in person) console.log('yes');
console.log('-----------------');
for (const item of Object.values(person)) {
  console.log(item);
}
