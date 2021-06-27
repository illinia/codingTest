let input = ['60', '100'];

let [m, n] = input;
m = Number(m);
n = Number(n);
let arr = [m];
for (let i = 1; i <= n - m; i++) {
  arr[i] = m + i;
}
let primeNumbers = [2];

for (let i = 3; i <= 10000; i++) {
  !primeNumbers.some(number => i % number === 0) && primeNumbers.push(i);
}

let result = [];

arr.forEach(number => {
  if (primeNumbers.findIndex(value => value === number) !== -1) {
    result.push(number);
  }
});

if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.reduce((pre, cur) => pre + cur, 0));
  console.log(Math.min(...result));
}