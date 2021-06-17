let input = [3, 29, 38, 12, 57, 74, 40, 85, 61];

let arr = input.map(number => Number(number));
let max = Math.max(...arr);

console.log(max, arr.indexOf(max) + 1);