let input = ['3', '8', '10', '10000'];

let arr = input.slice(1, input.length).map(value => Number(value));
let primeNumbers = [2];
let maxNumber = Math.max(...arr);

for (let i = 3; i < maxNumber; i++) {
  !primeNumbers.some(number => i % number === 0) && primeNumbers.push(i);
}

for (test of arr) {
  let middlePrimeNumberIndex = primeNumbers.findIndex(value => value >= test / 2);

  const findPrimeNumber = (indexNumber) => {
    return primeNumbers.findIndex(value => value === test - primeNumbers[indexNumber]);
  };

  while (true) {
    let findResult = findPrimeNumber(middlePrimeNumberIndex);
    if (findResult === -1) {
      middlePrimeNumberIndex++;
    } else {
      console.log(`${primeNumbers[findResult]} ${primeNumbers[middlePrimeNumberIndex]}`);
      break;
    }
  }
}
