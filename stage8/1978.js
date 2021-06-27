let input = [
  '4',
  '1 3 5 7'
];

let arr = input[1].split(' ').map(value => Number(value));
let count = 0;
let primeNumbers = [2];

for (let i = 3; i <= 1000; i++) {
  !primeNumbers.some(number => i % number === 0) && primeNumbers.push(i);
}

arr.forEach(number => primeNumbers.findIndex(value => value === number) !== -1 && count++);
console.log(count);