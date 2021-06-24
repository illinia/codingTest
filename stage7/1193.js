let input = [Number(3)];

let number = input[0];
let start = 1;
let total = 0;

while (true) {
  let current = total;
  total += start;
  if (number <= total) {
    if (start % 2 !== 1) {
      console.log(`${number - current}/${start - (number - current) + 1}`)
    } else {
      console.log(`${start - (number - current) + 1}/${number - current}`)
    }
    break;
  }
  start++;
}