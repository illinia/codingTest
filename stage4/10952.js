let input = ['1 1', '2 3', '3 4', '9 8', '5 2', '0 0'];
let arr = input.map(numbers => numbers.split(' '))
let count = 0;

while (true) {
  let [a, b] = arr[count++].map(number => Number(number));
  if (a !== 0 || b !== 0) {
    console.log(a + b);
  } else {
    break;
  }
}