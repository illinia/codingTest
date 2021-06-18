let input = ['3', '40 80 60'];
input = ['3', '10 20 30'];
input = ['4', '1 100 100 100'];
input = ['5', '1 2 4 8 16'];
input = ['2', '3 10'];

let arr = input[1].split(' ').map(number => Number(number));

let average = arr.reduce((prev, curr) => prev + curr, 0) / Math.max(...arr) * 100 / arr.length;
console.log(average);