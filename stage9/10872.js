let input = ['0'];

let number = Number(input[0]);
let result = 1;

const factorial = value => {
  if (value === 0) {
    return '';
  }
  result = result * value;
  factorial(value - 1);
}

factorial(number);

console.log(result);