let input = ['WA'];

let words = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let callingTime = 0;

input[0].split('').forEach(value => words.forEach((word, index) => {
  word.indexOf(value) !== -1 && (callingTime += index + 3);
}));

console.log(callingTime);