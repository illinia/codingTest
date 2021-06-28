let input = ['3 912342'];

let [m, n] = input[0].split(' ').map(value => Number(value));

let primeNumbers = [2];
for (let i = 3; i <= Math.sqrt(n); i++) {
  !primeNumbers.some(number => i % number === 0) && primeNumbers.push(i);
}

let numbers = [];
for (let i = m; i <= n; i++) {
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

let resultString = "";
numbers.forEach((value, index) => booleanArr[index] === true && (resultString += value + '\n'));
console.log(resultString)