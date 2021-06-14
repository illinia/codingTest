let arr = ['5', '1 1', '2 3', '3 4', '9 8', '5 2'];

for (let i = 1; i <= arr[0]; i++) {
  let [a, b] = arr[i].split(' ').map(number => Number(number));
  console.log(a + b);
}