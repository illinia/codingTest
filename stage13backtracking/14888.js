let input = [
  '6',
  '1 2 3 4 5 6',
  '2 1 1 1'
];

let arr = input[1].split(' ').map(value => Number(value));
let operator = input[2].split(' ').map(value => Number(value));

let result = [];
