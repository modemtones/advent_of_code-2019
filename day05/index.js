/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const fs = require('fs');

// load file and store values in an array
// const opcodeArray = fs
//   .readFileSync('input.txt')
//   .toString()
//   .trim()
//   .split(',');

const opcodeArray = '1002,4,3,4,33'.split(',');

let i;
let noun;
let verb;
let computationComplete = false;

const processOpcode = (opcode, param1, param2, param3) => {
  // parse opcode and update params if needed
  const oc = parseInt(opcode.slice(-2, opcode.length), 10);
  // use Math.floor to set param to 0 if NaN
  const om1 = Math.floor(opcode.slice(-3, -2));
  const om2 = Math.floor(opcode.slice(-4, -3));
  const om3 = Math.floor(opcode.slice(-5, -4));
  switch (oc) {
    case 1:
      opcodeArray[param3] = param1 + param2;
      return null;
    case 2:
      opcodeArray[param3] = param1 * param2;
      return null;
    case 3:
      opcodeArray[param1] = param2;
      return null;
    case 4:
      return opcodeArray[param1];
    case 99:
      computationComplete = true;
      return null;
    default:
      return null;
  }
};

const inst1 = '1002';
const opcode = parseInt(inst1.slice(-2, inst1.length), 10);
// use Math.floor to set param to 0 if NaN
const param1 = Math.floor(inst1.slice(-3, -2));
const param2 = Math.floor(inst1.slice(-4, -3));
const param3 = Math.floor(inst1.slice(-5, -4));
console.log(opcode);
console.log(param1);
console.log(param2);
console.log(param3);

for (i = 0; i <= testArray.length - 4 && !computationComplete; i += 4) {
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

// for (noun = 0; noun <= 99 && !computationComplete; noun++) {
//   for (verb = 0; verb <= 99 && !computationComplete; verb++) {
//     const testArray = [...opcodeArray];
//     let haltComputer = false;
//     testArray[1] = noun;
//     testArray[2] = verb;

//     for (i = 0; i <= testArray.length - 4 && !haltComputer; i += 4) {
//       const opInstruction = parseInt(testArray[i], 10);

//       if (opInstruction !== 99) {
//         const opParameter1 = parseInt(testArray[testArray[i + 1]], 10);
//         const opParameter2 = parseInt(testArray[testArray[i + 2]], 10);
//         const opParameter3 = parseInt(testArray[i + 3], 10);
//         testArray[opParameter3] = processOpcode(opInstruction, opParameter1, opParameter2);
//       } else {
//         haltComputer = true;
//       }
//     }

//     if (testArray[0] === 19690720) {
//       computationComplete = true;
//       console.log(`Solution found at noun [${noun}] + verb [${verb}]!`);
//       console.log(`Solution is ${100 * noun + verb}`);
//     }
//   }
// }
