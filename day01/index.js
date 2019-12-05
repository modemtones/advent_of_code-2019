const fs = require('fs');

// load file and store values in an array
const massArray = fs.readFileSync('input.txt').toString().split("\n");

let i;
let totalFuelRequired = 0;

const calculateFuel = function (mass) {
  // recursive function to calculate the fuel needed per part
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel <= 0) return mass;
  return mass + calculateFuel(fuel);
}

for(i = 0; i < massArray.length; i++) {
  // convert the mass to an integer before passing to the function
  const partMass = parseInt(massArray[i]);
  // calculate fuel required and add to the sum
  totalFuelRequired += calculateFuel(partMass) - partMass;
}

console.log(`Total Fuel Required: ${totalFuelRequired}`);