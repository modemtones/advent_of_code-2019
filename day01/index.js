const fs = require('fs');

// load file and store values in an array
const massArray = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

let i;
let totalFuelRequired = 0;

const calculateFuel = mass => {
  // recursive function to calculate the fuel needed per part
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel <= 0) return mass;
  return mass + calculateFuel(fuel);
};

// eslint-disable-next-line no-plusplus
for (i = 0; i < massArray.length; i++) {
  // convert the mass to an integer before passing to the function
  const partMass = parseInt(massArray[i], 10);
  // calculate fuel required and add to the sum
  totalFuelRequired += calculateFuel(partMass) - partMass;
}

// eslint-disable-next-line no-console
console.log(`Total Fuel Required: ${totalFuelRequired}`);
