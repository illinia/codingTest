let input = 55;
let result = 0;
let count = 0;

do {
  if (Number(result) === 0 && input < 10) {
    result = '0' + String(input);
  } else if (Number(result) === 0) {
    result = input;
  }

  let [a, b] = String(result).split("");
  let answer = Number(a) + Number(b);

  if (answer < 10) {
    answer = '0' + String(answer);
  }

  result = String(b) + String(answer).split("")[1];
  count++;
} while (Number(result) !== input)
console.log(count);