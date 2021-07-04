let input = ['1'];

let number = Number(input[0]);

for (let i = 1; i <= number; i++) {
  let stringNum = String(i)
  let answer = i;
  for (let j = 0; j < stringNum.length; j++) {
    answer += Number(stringNum[j]);
  }
  if (Number(answer) === number) {
    console.log(i)
    return;
  }
  if (i === number) {
    console.log(0);
  }
}