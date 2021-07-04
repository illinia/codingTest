let input = [
  '5',
  '55 185',
  '58 183',
  '88 186',
  '60 175',
  '46 155'
];

let arr = input.slice(1, input.length).map(value => value.split(' ').map(number => Number(number)));

let rank = Array(input.length - 1).fill(1);

for (let i = 0; i < arr.length; i++) {
  arr.forEach(value => {
    if (arr[i][0] < value[0] && arr[i][1] < value[1]) {
      rank[i]++;
    }
  });
}

console.log(rank.join(' '));