let set = new Set();

const d = (n) => {
  const result = n + String(n).split('').reduce((pre, cur) => Number(pre) + Number(cur), 0);
  return result;
}

for (let i = 1; i <= 10000; i++) {
  set.add(d(i));
}

let result = '';

for (let i = 1; i <= 10000; i++) {
  if (!set.has(i)) {
    result += i + '\n';
  }
}

console.log(result);