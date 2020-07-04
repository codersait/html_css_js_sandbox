function sum(...args) {
  return args;
}

console.log(sum(1, 2, 3, 4, 5));
// [ 1, 2, 3, 4, 5 ]
// 15

function sum(...args) {
  return args.reduce((a, b) => a + b);
}

function sumOfProducts(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sumOfProducts(0.1, 100, 200, 700)); // 900
