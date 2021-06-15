let input = ['5', '1 1', '2 3', '3 4', '9 8', '5 2'];
let result = "";

for (i = 1; i <= input[0]; i++) {
  const [a, b] = input[i].split(' ').map(number => Number(number));
  result += `Case #${i}: ${a + b}\n`;
}

console.log(result);