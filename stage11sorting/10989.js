let input = [
  '10',
  '5',
  '2',
  '3',
  '1',
  '4',
  '2',
  '3',
  '5',
  '1',
  '7'
];

input.shift();
input = input.map(value => Number(value));

let countingArr = Array(Math.max(...input)).fill(0);
let result = Array(input.length);

for (value of input) {
  countingArr[value - 1]++;
}

for (let i = 1; i < countingArr.length; i++) {
  countingArr[i] += countingArr[i - 1];
}

for (let i = 0; i < input.length; ++i) {
  result[--countingArr[input[i] - 1]] = input[i];
}

console.log(result.join('\n'));

