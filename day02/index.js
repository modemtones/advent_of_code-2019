/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const fs = require('fs');

// load file and store values in an array
const opcodeArray = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(',');

let i;
let noun;
let verb;
let computationComplete = false;

const processOpcode = (oc1, oc2, oc3) => {
  return oc1 === 1 ? oc2 + oc3 : oc2 * oc3;
};

for (noun = 0; noun <= 99 && !computationComplete; noun++) {
  for (verb = 0; verb <= 99 && !computationComplete; verb++) {
    const testArray = [...opcodeArray];
    let haltComputer = false;
    testArray[1] = noun;
    testArray[2] = verb;

    for (i = 0; i <= testArray.length - 4 && !haltComputer; i += 4) {
      const opInstruction = parseInt(testArray[i], 10);

      if (opInstruction !== 99) {
        const opParameter1 = parseInt(testArray[testArray[i + 1]], 10);
        const opParameter2 = parseInt(testArray[testArray[i + 2]], 10);
        const opParameter3 = parseInt(testArray[i + 3], 10);
        testArray[opParameter3] = processOpcode(opInstruction, opParameter1, opParameter2);
      } else {
        haltComputer = true;
      }
    }

    if (testArray[0] === 19690720) {
      computationComplete = true;
      console.log(`Solution found at noun [${noun}] + verb [${verb}]!`);
      console.log(`Solution is ${100 * noun + verb}`);
    }
  }
}
