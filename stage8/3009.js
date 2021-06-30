let input = ['30 20', '10 10', '10 20'];

let xArr = [], yArr = [];

input.map(value => {
  xArr.push(Number(value.split(' ')[0]));
  yArr.push(Number(value.split(' ')[1]))
});

let result = '';

let indexBoolean = (arr) => {
  return arr.findIndex(value => value === arr[arr.length - 1]) === arr.length - 1;
};

if (indexBoolean(xArr)) {
  result += xArr[xArr.length - 1] + ' ';
} else {
  result += xArr.filter(value => value !== xArr[xArr.length - 1]) + ' ';
}

if (indexBoolean(yArr)) {
  result += yArr[yArr.length - 1];
} else {
  result += yArr.filter(value => value !== yArr[yArr.length - 1]);
}

console.log(result);