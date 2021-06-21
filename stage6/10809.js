let input = ['baekjoon'];
let result = [];

for (i = 97; i <= 122; i++) {
  result.push(input[0].indexOf(String.fromCharCode(i)));
}

console.log(result.join(' '));
console.log(input[0].charCodeAt(1));
console.log(String.fromCharCode(97));