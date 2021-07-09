// let input = [
//   '0 3 5 4 6 9 2 7 8',
//   '7 8 2 1 0 5 6 0 9',
//   '0 6 0 2 7 8 1 3 5',
//   '3 2 1 0 4 6 8 9 7',
//   '8 0 4 9 1 3 5 0 6',
//   '5 9 6 8 2 0 4 1 3',
//   '9 1 7 6 5 2 0 8 0',
//   '6 0 3 7 0 1 9 5 2',
//   '2 5 8 3 9 4 7 6 0'
// ];

let input = [
  '0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0'
];

// let input = [
//   '0 2 0 9 0 5 0 0 0',
//   '5 9 0 0 3 0 2 0 0',
//   '7 0 0 6 0 2 0 0 5',
//   '0 0 9 3 5 0 4 6 0',
//   '0 5 4 0 0 0 7 8 0',
//   '0 8 3 0 2 7 5 0 0',
//   '8 0 0 2 0 9 0 0 4',
//   '0 0 5 0 4 0 0 2 6',
//   '0 0 0 5 0 3 0 7 0'
// ];

let arr = input.map(value => value.split(' ').map(number => Number(number)));

const calc = (value, horizontalIndex, verticalIndex) => {
  for (let i = 0; i < 9; i++) {
    if (arr[horizontalIndex][i] === value) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (arr[i][verticalIndex] === value) {
      return false;
    }
  }

  let index1 = Math.floor(horizontalIndex / 3) * 3;
  let index2 = Math.floor(verticalIndex / 3) * 3;

  for (let i = index1; i < index1 + 3; i++) {
    for (let j = index2; j < index2 + 3; j++) {
      if (arr[i][j] === value) {
        return false;
      }
    }
  }
  return true;
};

let result = [];

const mainFunc = (row, col) => {
  if (col === 9) {
    mainFunc(row + 1, 0);
    return;
  }

  if (row === 9) {
    arr.forEach(value => result.push(value.join(' ')))
    console.log(result.join('\n'));
    process.exit();
  }

  if (arr[row][col] === 0) {
    for (let i = 1; i <= 9; i++) {
      if (calc(i, row, col)) {
        arr[row][col] = i;
        mainFunc(row, col + 1);
      }
    }
    arr[row][col] = 0;
    return;
  }
  mainFunc(row, col + 1);
};

mainFunc(0, 0);

// const horizontalFunc = (value, horizontalIndex) => {
//   for (let i = 0; i < 9; i++) {
//     if (arr[horizontalIndex][i] === value) {
//       return false;
//     }
//   }
// };

// const verticalFunc = (value, verticalIndex) => {
//   for (let i = 0; i < 9; i++) {
//     if (arr[i][verticalIndex] === value) {
//       return false;
//     }
//   }
// };

// const sqaureFunc = (value, index1, index2) => {
//   let index1 = Math.floor(index1 / 3) * 3;
//   let index2 = Math.floor(index2 / 3) * 3;

//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (arr[index1 + i][index2 + j] === value) {
//         return false;
//       }
//     }
//   }
// };

// const calc = (value, horizontalIndex, verticalIndex) => {
//   horizontalFunc(value, horizontalIndex);
//   verticalFunc(value, verticalIndex);
//   sqaureFunc(value, horizontalIndex, verticalIndex);
// };
