let input = ['1 1', '2 3', '3 4', '9 8', '5 2'];
let arr = input.map(numbers => numbers.split(' '))
let count = 0;

while (count < arr.length) {
  let [a, b] = arr[count++].map(number => Number(number));
  console.log(a + b);
}