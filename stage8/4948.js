let input = [
  '1',
  '10',
  '13',
  '100',
  '1000',
  '10000',
  '100000',
  '0'
];

for (let i = 0; i < input.length - 1; i++) {

  let m = Number(input[i]);
  let n = m * 2;

  let primeNumbers = [2];
  for (let i = 3; i <= Math.sqrt(n); i++) {
    !primeNumbers.some(number => i % number === 0) && primeNumbers.push(i);
  }

  let numbers = [];
  for (let i = m + 1; i <= n; i++) {
    numbers.push(i);
  };
  if (numbers[0] === 1) {
    numbers.splice(0, 1);
  }

  let booleanArr = Array(numbers.length).fill(true);

  let numbersLength = numbers.length;
  primeNumbers.forEach(primeNumber => {
    for (let i = 0; i < numbersLength; i++) {

      if ((primeNumber !== numbers[i]) && (numbers[i] % primeNumber === 0)) {
        if (numbers[i] === true) continue;
        for (let j = i; j < numbersLength; j = j + numbers[i]) {
          booleanArr[j] = false;
        }
      }
    }
  });

  let count = 0;

  numbers.forEach((_, index) => booleanArr[index] === true && count++);
  console.log(count);
}
