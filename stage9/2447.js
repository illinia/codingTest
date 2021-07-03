let input = ['27'];

let number = Number(input[0]);

let result = '';

const recallFunc = (i, j, num) => {
  if (i % 3 === 1 && j % 3 === 1) {
    result += ' ';
  } else {
    if (num === 1) {
      result += '*';
    } else {
      recallFunc(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
}

for (let i = 0; i < number; i++) {
  for (let j = 0; j < number; j++) {
    recallFunc(i, j, number);
  }
  result += '\n';
}
console.log(result);