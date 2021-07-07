let input = [
  '3',
  '21 1Dohyun',
  '21 2Junkyu',
  '21 3Dohyun',
  '20 4Sunyoung'
];

input.shift();
let [a, b] = [];
let arr = input.map(value => {
  [a, b] = value.split(' ')
  return [Number(a), b];
});

arr.sort((a, b) => a[0] - b[0]);
console.log(arr.join('\n').replace(/,/gi, ' '));