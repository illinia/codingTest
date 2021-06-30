let input = [
  '5 4 3',
  '25 52 60',
  '5 12 13',
  '0 0 0'
];

let test = input.filter((_, index) => index !== input.length - 1);
let arr = test.map(value => value.split(' ').map(value => Number(value)));
let answer = [];

arr.map(value => {
  let c = Math.max(...value);
  let [a, b] = value.filter(number => number !== c);

  if (c * c === a * a + b * b) {
    answer.push('right');
  } else {
    answer.push('wrong');
  }
});

console.log(answer.join('\n'));