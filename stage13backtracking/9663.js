let input = ['8'];

let N = Number(input[0]);

let booleanArr = [];
for (let i = 0; i < N; i++) {
  booleanArr.push(Array(N).fill(false));
}

let count = 0;

const backCheck = (horizontal, vertical) => {
  let bool = true;
  for (let i = 1; i < N; i++) {
    if (horizontal - i >= 0) {
      if (booleanArr[horizontal - i][vertical]) {
        bool = false;
        return;
      }
      if (vertical - i >= 0 && booleanArr[horizontal - i][vertical - i]) {
        bool = false;
        return;
      }
      if (vertical + i < N && booleanArr[horizontal - i][vertical + i]) {
        bool = false;
        return;
      }
    }
  }
  return bool;
}

const check = (horizontal) => {
  if (horizontal >= N) {
    count++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (backCheck(horizontal, i) === false) {
      return;
    } else if (backCheck(horizontal, i) === true) {
      booleanArr[horizontal][i] = true;
      check(horizontal + 1);
      booleanArr[horizontal][i] = false;
    }
  }
};

check(0);
console.log(count++);