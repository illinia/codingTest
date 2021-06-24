let input = [280000];

let totalCount = 0;
let result = 0;

for (let i = 1; i > 0; i++) {
  let currentMax = totalCount + (i * 6 - 6) + 1;
  if ((totalCount < input[0]) && (input[0] <= currentMax)) {
    result = i;
    break;
  }
  totalCount += i * 6 - 6;
}

console.log(result)