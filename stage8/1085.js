let input = ['6 2 10 3'];

let [x, y, w, h] = input[0].split(' ').map(value => Number(value));

let minimum = [x, w - x, y, h - y];

console.log(Math.min(...minimum));