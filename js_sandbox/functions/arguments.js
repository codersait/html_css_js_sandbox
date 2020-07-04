function sum(a, b) {
  return a + b;
}

// console.log(sum(1)); // 1 + undefined = NaN
// console.log(sum()); // undefined + undefined = NaN

function topla() {
  //console.log(arguments);
  for (const arg of arguments) {
    console.log(arg);
  }
}
//topla(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }

function toplaSon() {
  let sum = 0;
  for (const arg of arguments) {
    sum += arg;
  }
  return sum;
}

console.log(toplaSon(1, 2, 3, 4, 100));
