let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1 --> use when you have one reference
numbers = [];

// Solution 2 --> best way
numbers.length = 0;

// Solution 3
numbers.splice(0, numbers.length);

// Solution 4
while (numbers.length > 0) {
  numbers.pop();
}
