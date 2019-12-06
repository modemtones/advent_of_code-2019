const fs = require('fs');

// load file and store values in an array
const opcodeArray = fs
  .readFileSync('input.txt')
  .toString()
  .split(',');

opcodeArray[1] = 45;
opcodeArray[2] = 59;

let i;
let haltComputer = false;

const processOpcode = (oc1, oc2, oc3) => {
  return oc1 === 1 ? oc2 + oc3 : oc2 * oc3;
};

for (i = 0; i <= opcodeArray.length - 4 && !haltComputer; i += 4) {
  const opInstruction = parseInt(opcodeArray[i], 10);

  if (opInstruction !== 99) {
    const opParameter1 = parseInt(opcodeArray[opcodeArray[i + 1]], 10);
    const opParameter2 = parseInt(opcodeArray[opcodeArray[i + 2]], 10);
    const opParameter3 = parseInt(opcodeArray[i + 3], 10);
    opcodeArray[opParameter3] = processOpcode(opInstruction, opParameter1, opParameter2);
  } else {
    haltComputer = true;
  }
  console.log(`Array after running code at position ${i}`);
  console.log(opcodeArray);
}

// eslint-disable-next-line no-console
console.log(opcodeArray);
