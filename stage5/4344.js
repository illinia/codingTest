let input = [
  '5',
  '5 50 50 70 80 100',
  '7 100 95 90 80 70 60 50',
  '3 70 90 80',
  '3 70 90 81',
  '9 100 99 98 97 96 95 94 93 91'
];

let arr = input
  .filter((_, index) => index !== 0)
  .map(numbers => numbers.split(' ')
    .filter((_, index) => index !== 0)
  );

let average = [];

arr.forEach(numbers => average.push(numbers
  .reduce((pre, cur) => Number(pre) + Number(cur), 0) / numbers.length)
);

let result = [];

for (let i = 0; i < average.length; i++) {
  let count = 0;
  arr[i].forEach(number => {
    if (number > average[i]) {
      count++;
    }
  })
  result.push((count / arr[i].length * 100).toFixed(3) + '%');
}

result.forEach(number => console.log(number))