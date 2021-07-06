let input = [
  '8 8',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBBBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW'
];

// let input = [
//   '10 13',
//   'BBBBBBBBWBWBW',
//   'BBBBBBBBBWBWB',
//   'BBBBBBBBWBWBW',
//   'BBBBBBBBBWBWB',
//   'BBBBBBBBWBWBW',
//   'BBBBBBBBBWBWB',
//   'BBBBBBBBWBWBW',
//   'BBBBBBBBBWBWB',
//   'WWWWWWWWWWBWB',
//   'BWWWWWWWWWBWB'
// ];

let firstWord = input[1].slice(0, 1);
let board = input.splice(1, input.length).map(line => {
  let newLine = [];
  for (let i = 0; i < line.length; i++) {
    if (firstWord === line[i]) {
      newLine.push(true);
    } else {
      newLine.push(false);
    }
  }
  return newLine;
});

let count = 64;

for (let boolean = 0; boolean <= 1; boolean++) {
  for (let i = 0; i <= board.length - 8; i++) {
    let eachCount = 0;
    for (let j = 0; j <= board[0].length - 8; j++) {
      for (let k = 0; k < 8; k++) {
        for (let l = 0; l < 8; l++) {
          if ((i + k + j + l) % 2 === 0) {
            if (board[i + k][j + l] !== !!boolean) {
              eachCount++;
            }
          } else if ((i + k + j + l) % 2 !== 0) {
            if (board[i + k][j + l] !== !boolean) {
              eachCount++;
            }
          }
        }
      }
      if (eachCount < count) {
        count = eachCount;
      }
      eachCount = 0;
    }
  }
}

console.log(count);