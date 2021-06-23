let input = ['1000 70 169'];

let [A, B, C] = input[0].split(' ').map(value => Number(value));

let amount = (A / (C - B)) + 1;
if (B >= C) {
  console.log(-1);
} else {
  console.log(Math.floor(amount));
  console.log(amount)
}