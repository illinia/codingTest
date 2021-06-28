let input = ['1'];

let number = Number(input[0]);
let resultArr = [];

let i = 2;
while (true) {
  if (i > number) {
    break;
  } else if (number % i === 0) {
    number = number / i;
    resultArr.push(i)
  } else if (number % i !== 0) {
    i++;
    continue;
  }
}

resultArr.forEach(value => console.log(value));

// for (let i = 3; i <= number / 2; i++) {
//   !primeNumbers.some(number => i % number === 0) && primeNumbers.push(i);
// }

// let i = 0;
// let resultNumber = number;

// while (i < primeNumbers.length) {

//   if (primeNumbers[i] > resultNumber) {
//     i = primeNumbers.length;
//   } else if (resultNumber % primeNumbers[i] === 0) {
//     resultNumber = resultNumber / primeNumbers[i];
//     resultArr.push(primeNumbers[i]);
//   } else if (resultNumber % primeNumbers[i] !== 0) {
//     i++;
//   }
// }


// resultArr.forEach(value => console.log(value));