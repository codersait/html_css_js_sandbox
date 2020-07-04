function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const adres2 = new Address('a', 'b', 'c');
const adres1 = new Address('a', 'b', 'c');
const adres3 = adres1;

function areEqual(adres1, adres2) {
  if (areSame(adres1, adres2)) {
    return true;
  }
  return (
    adres1.street === adres2.street &&
    adres1.city === adres2.city &&
    adres1.zipCode === adres2.zipCode
  );
}

function areSame(adres1, adres2) {
  return adres1 === adres2;
}

console.log(
  `adres1 and adres2 areSame: ${areSame(adres1, adres2)} & areEqual: ${areEqual(
    adres1,
    adres2
  )} & adres1 and adres3 areSame:${areSame(adres1, adres3)}`
);
