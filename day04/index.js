const num1 = 136818;
const num2 = 685979;

const validNumbers = [];
const validNumbers2 = [];

let i;

for (i = num1; i <= num2; i += 1) {
  const numArray = Array.from(i.toString()).map(Number);
  let doubleDigits = false;
  let noDigitsDec = true;

  for (let j = 0; j < numArray.length - 1 && noDigitsDec; j += 1) {
    if (!doubleDigits) {
      doubleDigits = numArray[j] === numArray[j + 1];
    }
    noDigitsDec = numArray[j] <= numArray[j + 1];
  }

  if (doubleDigits && noDigitsDec) {
    validNumbers.push(i);
  }
}

for (i = 0; i < validNumbers.length; i += 1) {
  const onlyDoubleDigits = (validNumbers[i].toString().match(/(\d)\1+/g) || [])
    .map(sequence => sequence.length)
    .includes(2);
  if (onlyDoubleDigits) {
    validNumbers2.push(i);
  }
}

console.log(`Number of part 1 valid passwords: ${validNumbers.length}`);
console.log(`Number of part 2 valid passwords: ${validNumbers2.length}`);
