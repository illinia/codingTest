let input = [150, 266, 427];

let arr = input.map(number => Number(number));
let answer = arr.reduce((prev, curr) => prev * curr);

let resultArr = new Array(10).fill(0);

// for (let i = 0; i < answer.length; i++) {
//   resultArr[Number(answer[i])]++;
// }

for (let number of String(answer)) {
  resultArr[number]++;
}

// for (number of resultArr) {
//   console.log(number);
// }
console.log(resultArr.join('\n'));