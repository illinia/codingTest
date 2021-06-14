var [a, b] = [1, 10];

b = b - 45;

if (b < 0) {
  a--;
  b = 60 + b;
}
if (a < 0) {
  a = 23;
}
console.log(a + ' ' + b);