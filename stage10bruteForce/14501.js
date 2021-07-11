let input = [
  '7',
  '3 10',
  '5 20',
  '1 10',
  '1 20',
  '2 15',
  '4 40',
  '2 200'
];

// let input = [
//   '10',
//   '1 1',
//   '1 2',
//   '1 3',
//   '1 4',
//   '1 5',
//   '1 6',
//   '1 7',
//   '1 8',
//   '1 9',
//   '1 10',
// ];

// let input = [
//   '10',
//   '5 10',
//   '5 9',
//   '5 8',
//   '5 7',
//   '5 6',
//   '5 10',
//   '5 9',
//   '5 8',
//   '5 7',
//   '5 6'
// ];

// let input = [
//   '10',
//   '5 50',
//   '4 40',
//   '3 30',
//   '2 20',
//   '1 10',
//   '1 10',
//   '2 20',
//   '3 30',
//   '4 40',
//   '5 50'
// ];

input.shift();
let days = input.map(value => Number(value.split(' ')[0]));
let profits = input.map(value => Number(value.split(' ')[1]));

let result = [];

const search = (index, profit) => {
  if (!profit) profit = 0;
  let day = days[index];
  let sumProfit = profit + profits[index];
  if (index + day === input.length) {
    result.push(sumProfit);
    return;
  }
  if (index + day > input.length) {
    result.push(profit);
    return;
  }
  for (let j = index + day; j < input.length; j++) {
    search(j, sumProfit);
  }
}

for (let i = 0; i < input.length; i++) {
  search(i);
}

console.log(Math.max(...result));