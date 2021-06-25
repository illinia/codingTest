let input = ['21'];

let weight = Number(input[0]);
let divideResult = Math.floor(weight / 5);
let remainder = weight % 5;
if (remainder === 0) {
  console.log(divideResult)
} else if (remainder !== 0) {
  for (divideResult; divideResult >= 0; divideResult--) {
    let threeRemainder = (weight - divideResult * 5) / 3;
    if (Number.isSafeInteger(threeRemainder)) {
      console.log(divideResult + threeRemainder)
      break;
    } else if (divideResult === 0) {
      console.log(-1)
    }
  }
}