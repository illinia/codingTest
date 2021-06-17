let input = ['5', '20 10 35 30 7'];
let arr = input[1].split(' ').map(number => Number(number));
let max = arr[0], min = arr[0];

for (number of arr) {
  max = number > max ? number : max;
  min = number < min ? number : min;
}

console.log(min, max)