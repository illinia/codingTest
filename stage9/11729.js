let input = ['2'];

let number = Number(input[0]);
let result = [0];

const hanoi = (N, start, end) => {
  if (N === 1) {
    result.push(`${start} ${end}`);
    result[0]++;
    return;
  }
  hanoi(N - 1, start, 6 - start - end);
  result.push(`${start} ${end}`);
  result[0]++;
  hanoi(N - 1, 6 - start - end, end)
}

hanoi(number, 1, 3);
console.log(result.join('\n'));