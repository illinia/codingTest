let input = [
  2,
  1,
  3,
  2,
  3
];

// 1 2 3
// 1 1 + 2 1 + 2 + 3
// 1 1 + (1 + 2) 1 + (1 + 2) + (1 + 2 + 3)
// 1 1 + (1 + (1 + 2)) 1 + (1 + (1 + 2) + 1 + (1 + (1 + 2) + (1 + 2 + 3)))


let arr = input.splice(1, input.length);

const sum = (k, n) => {
  let roomAmount = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    roomAmount[i] = i + 1;
  }

  for (let i = 1; i <= k; i++) {
    roomAmount.reduce((pre, cur, index, selfthis) => {
      selfthis[index] = (pre + cur);
      return (pre + cur);
    }, 0)
  }
  return roomAmount[n - 1];
}

for (let i = 0; i < arr.length; i += 2) {
  console.log(sum(arr[i], arr[i + 1]))
}