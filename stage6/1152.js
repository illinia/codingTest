let input = [' '];

let count = 0;

input[0].trim().split('').forEach(value => value === ' ' ? count++ : '');
if (input[0] === ' ') {
  console.log(0);
} else { console.log(++count); }
console.log(input[0].trim().split(''))