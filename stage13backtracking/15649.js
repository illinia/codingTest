let input = ['4 2'];

let [a, b] = input[0].split(' ').map(value => Number(value));

let temp = [];
let result = [];
let booleanCheck = Array(a + 1).fill(false);

const choose = (start, M, dept) => {
  if (dept === M) {
    result.push([...temp].join(' '));
    temp[dept - 1] = 0;
    return;
  };
  for (let i = start; i <= a; i++) {
    if (booleanCheck[i] === false) {
      temp[dept] = i;
      booleanCheck[i] = true;
      choose(start, M, dept + 1);
      booleanCheck[i] = false;
    }
  }
}
choose(1, b, 0);
console.log(result.join('\n'))