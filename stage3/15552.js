var arr = ['5', '1 1', '12 34', '5 500', '40 60', '1000 1000'];

var result = "";

for (let i = 1; i <= arr[0]; i++) {
  let [a, b] = arr[i].split(' ').map(number => Number(number));
  result += a + b + "\n";
}
console.log(result);