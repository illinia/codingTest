let input = [
  '3',
  '0 3',
  '1 5',
  '45 50'
];

let arr = input.splice(1, input.length).map(value => value.split(' ').map(value => Number(value)));

for (value of arr) {
  let count = 0;
  let [x, y] = value;
  let length = y - x;
  let remainder = 0;
  for (let i = 1; length > 0; i++) {
    if ((length / i) <= 3) {
      remainder = length % i
      count += Math.floor(length / i) + (remainder === 0 ? 0 : 1);
      length = length - count;
    } else if ((length / i) > 3) {
      count += 2;
      length = length - (i * 2);
    }
  }
  console.log(count);
}