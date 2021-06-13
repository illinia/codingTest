var [a, b] = [1, -2];

console.log('-1\n-2'.toString().split('\n')[0]);

if (a > 0 && b > 0) {
  console.log(1);
} else if (a < 0 && b > 0) {
  console.log(2);
} else if (a < 0 && b < 0) {
  console.log(3);
} else if (a > 0 && b < 0) {
  console.log(4);
}