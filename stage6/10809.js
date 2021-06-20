let input = ['baekjoon'];
let result = [];

for (i = 97; i <= 122; i++) {
  result.push(input[0].indexOf(String.fromCharCode(i)));
}

console.log('1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1' == result.join(' '));