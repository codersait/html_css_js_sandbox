// Object Exercises
const address = {
  street: 'caddei salim',
  city: 'Sulaymaniyah',
  zipCode: 65700,
};

function showAddress(address) {
  for (const key in address) {
    console.log(`${key}: ${address[key]}`);
  }
}

showAddress(address);
console.log('---------------');
// Factory Function

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const adres = createAddress('caddei salim', 'Sulaymaniyah', 65700);

showAddress(adres);
console.log('---------------');

//Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const adres2 = new Address('caddei salim', 'Sulaymaniyah', 65700);
showAddress(adres2);
console.log('---------------');
