const numbers = [1, 2, 3];

// Without index
for (const number of numbers) {
  console.log(number);
}

// With index --- typeof index = string
for (const index in numbers) {
  console.log(index, numbers[index]);
}

// Foreach --- typeof index = number

numbers.forEach((number, index) => console.log(index, number));
