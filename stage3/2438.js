let input = 5;

let result = "";

for (let i = 1; i <= input; i++) {
  for (let j = input - i; j > 0; j--) {
    result += " ";
  }
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  if (i !== input) {
    result += "\n";
  }
}

console.log(result);