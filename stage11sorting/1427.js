let input = ['211231231243'];

let numberArr = [];
for (value of input[0]) {
  numberArr.push(Number(value));
}

numberArr.sort((a, b) => b - a);
console.log(numberArr.join(''))