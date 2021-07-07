let input = [
  '5',
  '1000 999 1000 999 1000 999'
];

let arr = input[1].split(' ').map(value => Number(value));
let result = Array.from(new Set([...arr].sort((a, b) => a - b)));

let numberObject = {};
result.forEach((value, index) => {
  numberObject[value] = index;
});
let answer = '';
arr.forEach(value => answer += numberObject[value] + ' ');
console.log(answer)