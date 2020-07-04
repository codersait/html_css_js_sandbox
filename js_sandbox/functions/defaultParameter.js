function interest(pricipal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((pricipal * rate) / 100) * years;
}
console.log(interest(10000));

/* make sure that that default parameter is the last parameter in the list */
function interestDefaultValue(pricipal, rate = 3.5, years = 5) {
  return ((pricipal * rate) / 100) * years;
}
console.log(interestDefaultValue(10000));
