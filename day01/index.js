const fs = require('fs');

// load file and store values in an array
const massArray = fs.readFileSync('input.txt').toString().split("\n");

let i;
let fuelRequired = 0;

for(i = 0; i < massArray.length; i++) {
  // calculate fuel required and add to the sum
  fuelRequired += (Math.floor(massArray[i] / 3) - 2);
}

console.log(`Fuel Required: ${fuelRequired}`);