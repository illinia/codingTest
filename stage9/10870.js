let input = ['20'];

let test = Number(input[0]);

let arr = [0, 1];

const fibonacci = value => {
  if (arr.length - 1 === value || value === 0) return '';
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  fibonacci(value);
};

fibonacci(test);
console.log(arr[test]);