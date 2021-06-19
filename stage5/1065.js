let input = 210;
let result = 0;

const fn = (i) => {
  String(i).split('')
    .map((value, index, arr) => {
      if (index < arr.length - 1) {
        return value - arr[index + 1];
      }
    })
    .filter(result => result !== undefined)
    .every((number, _, arr) => number === arr[0]) ? result++ : '';
}

for (let i = 1; i <= input; i++) {
  fn(i);
}

console.log(result);