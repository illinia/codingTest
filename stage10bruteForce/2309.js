let input = [
  '20',
  '7',
  '23',
  '19',
  '10',
  '15',
  '25',
  '8',
  '13'
];

let arr = input.map(value => Number(value));
const sum = arr.reduce((pre, cur) => pre + cur, 0);
let result

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (sum - arr[i] - arr[j] === 100) {
      result = arr.filter(value => value !== arr[i]);
      result = result.filter(value => value !== arr[j]);
      break;
    }
  }
}

console.log(result.sort((a, b) => a - b).join('\n'));