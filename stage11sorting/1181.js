let input = [
  '13',
  'but',
  'i',
  'wont',
  'hesitate',
  'no',
  'more',
  'no',
  'more',
  'it',
  'cannot',
  'wait',
  'im',
  'yours'
];

input.shift();

// let result = [];
// let wordLength = input.map(value => value.length);
// let min = Math.min(...wordLength);
// let max = Math.max(...wordLength);

// for (let i = min; i <= max; i++) {
//   const words = [];
//   for (let j = 0; j < input.length; j++) {
//     if (input[j].length === i) {
//       if (words.indexOf(input[j]) === -1) {
//         words.push(input[j]);
//       }
//     }
//   }
//   result.push(...words.sort());
// }

// console.log(result.join('\n'));

const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const result = new Set(sorted);
console.log(Array.from(result).join('\n'))