let input = [
  5,
  -2,
  -1,
  -3,
  -2,
  -1
];

// let input = ['1', '4000']

// let input = [
//   5,
//   1,
//   3,
//   8,
//   -2,
//   2
// ]
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

input.shift()
input.sort((a, b) => a - b);
let sum = 0;
input.forEach(value => sum += value);
console.log(Math.round(sum / input.length));
console.log(input[Math.floor(input.length / 2)])

const numberMap = new Map();
for (let i = 0; i < input.length; i++) {
  let value = input[i];
  if (numberMap.has(value)) {
    numberMap.set(value, numberMap.get(value) + 1)
  } else {
    numberMap.set(value, 1);
  }
}
let numberArr = [];

for (const value of numberMap.values()) {
  numberArr.push(value);
}

let maxCountNumbers = [];
let maxValue = 0;

numberMap.forEach((value, key) => {
  if (maxValue < value) {
    maxValue = value;
    maxCountNumbers = [];
    maxCountNumbers.push(key);
  } else if (maxValue === numberMap.get(key)) {
    maxCountNumbers.push(key)
  }
})

if (maxCountNumbers.length !== 1) {
  console.log(maxCountNumbers[1]);
} else {
  console.log(maxCountNumbers[0]);
}

console.log(Math.max(...input) - Math.min(...input));

// let countArr = Array(8001).fill(0);
// input.forEach(value => countArr[value + 4000]++);
// let maxCount = Math.max(...countArr);
// let indexNumber = countArr.findIndex(value => value === maxCount);
// let secondMaxIndex = countArr.slice(indexNumber + 1).findIndex(value => value === maxCount);

// if (secondMaxIndex === -1) {
//   console.log(indexNumber - 4000);
// } else {
//   console.log(secondMaxIndex - 1);
// }