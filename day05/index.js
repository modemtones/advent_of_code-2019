/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const fs = require('fs');
const readlineSync = require('readline-sync');

const steps = [];

// load file and store values in an array
const opcodeArray = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(',');

// const opcodeArray = '1002,4,3,4,33'.split(',');
// const opcodeArray = '1101,100,-1,4,0'.split(',');

let i = 0;
let computationComplete = false;

const getInput = param => {
  const userInput = readlineSync.question(`Please enter a value: `);
  opcodeArray[param] = parseInt(userInput, 10);
  steps.push(`Wrote ${opcodeArray[param]} at location ${param}`);
  i += 2;
};

const processOpcode = opcode => {
  // parse opcode and update params if needed
  const opcodeStr = opcode.toString();
  const oc = parseInt(opcodeStr.slice(-2, opcodeStr.length), 10);
  steps.push(`Got opcode ${oc} at Location ${i}`);
  let param1;
  let param2;
  let param3;
  // use Math.floor to set param to 0 if NaN
  const omode1 = Math.floor(opcodeStr.slice(-3, -2));
  const omode2 = Math.floor(opcodeStr.slice(-4, -3));
  const omode3 = Math.floor(opcodeStr.slice(-5, -4));
  steps.push(`omode1: ${omode1} || omode2: ${omode2} || omode3: ${omode3}`);
  switch (oc) {
    case 1:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      param2 = omode2 === 0 ? opcodeArray[opcodeArray[i + 2]] : opcodeArray[i + 2];
      param3 = opcodeArray[i + 3];
      param1 = parseInt(param1, 10);
      param2 = parseInt(param2, 10);
      param3 = parseInt(param3, 10);
      steps.push(`param1: ${param1} || param2: ${param2} || param3: ${param3}`);
      opcodeArray[param3] = param1 + param2;
      steps.push(`Wrote ${opcodeArray[param3]} at location ${param3}`);
      i += 4;
      return null;
    case 2:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      param2 = omode2 === 0 ? opcodeArray[opcodeArray[i + 2]] : opcodeArray[i + 2];
      param3 = opcodeArray[i + 3];
      param1 = parseInt(param1, 10);
      param2 = parseInt(param2, 10);
      param3 = parseInt(param3, 10);
      steps.push(`param1: ${param1} || param2: ${param2} || param3: ${param3}`);
      opcodeArray[param3] = param1 * param2;
      steps.push(`Wrote ${opcodeArray[param3]} at location ${param3}`);
      i += 4;
      return null;
    case 3:
      param1 = opcodeArray[i + 1];
      steps.push(`param1: ${param1}`);
      getInput(param1);
      return null;
    case 4:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      steps.push(`param1: ${param1}`);
      console.log(`Program Output: ${param1}`);
      steps.push(`Program Output ${param1}`);
      i += 2;
      return null;
    case 99:
      computationComplete = true;
      return null;
    default:
      return null;
  }
};

while (i <= opcodeArray.length - 4 && !computationComplete) {
  processOpcode(opcodeArray[i]);
}
