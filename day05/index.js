/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const fs = require('fs');
const readlineSync = require('readline-sync');

// load file and store values in an array
const opcodeArray = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(',');

let i = 0;
let computationComplete = false;

const getInput = param => {
  const userInput = readlineSync.question(`Please enter a value: `);
  opcodeArray[param] = parseInt(userInput, 10);
  i += 2;
};

const processOpcode = opcode => {
  // parse opcode and update params if needed
  const opcodeStr = opcode.toString();
  const oc = parseInt(opcodeStr.slice(-2, opcodeStr.length), 10);
  let param1;
  let param2;
  let param3;
  // use Math.floor to set param to 0 if NaN
  const omode1 = Math.floor(opcodeStr.slice(-3, -2));
  const omode2 = Math.floor(opcodeStr.slice(-4, -3));
  const omode3 = Math.floor(opcodeStr.slice(-5, -4));
  switch (oc) {
    case 1:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      param2 = omode2 === 0 ? opcodeArray[opcodeArray[i + 2]] : opcodeArray[i + 2];
      param3 = opcodeArray[i + 3];
      param1 = parseInt(param1, 10);
      param2 = parseInt(param2, 10);
      param3 = parseInt(param3, 10);
      opcodeArray[param3] = param1 + param2;
      i += 4;
      return null;
    case 2:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      param2 = omode2 === 0 ? opcodeArray[opcodeArray[i + 2]] : opcodeArray[i + 2];
      param3 = opcodeArray[i + 3];
      param1 = parseInt(param1, 10);
      param2 = parseInt(param2, 10);
      param3 = parseInt(param3, 10);
      opcodeArray[param3] = param1 * param2;
      i += 4;
      return null;
    case 3:
      param1 = opcodeArray[i + 1];
      param1 = parseInt(param1, 10);
      getInput(param1);
      return null;
    case 4:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      console.log(`Program Output: ${param1}`);
      i += 2;
      return null;
    case 5:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      param2 = omode2 === 0 ? opcodeArray[opcodeArray[i + 2]] : opcodeArray[i + 2];
      param1 = parseInt(param1, 10);
      param2 = parseInt(param2, 10);
      i = param1 === 0 ? i + 3 : param2;
      return null;
    case 6:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      param2 = omode2 === 0 ? opcodeArray[opcodeArray[i + 2]] : opcodeArray[i + 2];
      param1 = parseInt(param1, 10);
      param2 = parseInt(param2, 10);
      i = param1 === 0 ? param2 : i + 3;
      return null;
    case 7:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      param2 = omode2 === 0 ? opcodeArray[opcodeArray[i + 2]] : opcodeArray[i + 2];
      param3 = opcodeArray[i + 3];
      param1 = parseInt(param1, 10);
      param2 = parseInt(param2, 10);
      param3 = parseInt(param3, 10);
      opcodeArray[param3] = param1 < param2 ? 1 : 0;
      i += 4;
      return null;
    case 8:
      param1 = omode1 === 0 ? opcodeArray[opcodeArray[i + 1]] : opcodeArray[i + 1];
      param2 = omode2 === 0 ? opcodeArray[opcodeArray[i + 2]] : opcodeArray[i + 2];
      param3 = opcodeArray[i + 3];
      param1 = parseInt(param1, 10);
      param2 = parseInt(param2, 10);
      param3 = parseInt(param3, 10);
      opcodeArray[param3] = param1 === param2 ? 1 : 0;
      i += 4;
      return null;
    case 99:
      computationComplete = true;
      return null;
    default:
      return null;
  }
};

while (i <= opcodeArray.length && !computationComplete) {
  processOpcode(opcodeArray[i]);
}
