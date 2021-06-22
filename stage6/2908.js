let input = ['734 893'];

let [a, b] = input[0].split(' ');

a = Number(String(a).split('').reverse().join(''));
b = Number(String(b).split('').reverse().join(''));

console.log(a > b ? a : b)