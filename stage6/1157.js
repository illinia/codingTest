let input = ['z'];

let words = input[0].toUpperCase();
let arr = Array('Z'.charCodeAt() - 'A'.charCodeAt() + 1).fill(0);

for (word of words) {
  arr[word.charCodeAt() - 65]++
}

if (arr.filter(value => value === Math.max(...arr)).length > 1) {
  console.log('?');
} else {
  console.log(String.fromCharCode(arr.indexOf(Math.max(...arr)) + 65));
}