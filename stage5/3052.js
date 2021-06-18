let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
input = [42,
  84,
  252,
  420,
  840,
  126,
  42,
  84,
  420,
  126];
input = [39,
  40,
  41,
  42,
  43,
  44,
  82,
  83,
  84,
  85];

const set = new Set([]);

for (number of input) {
  set.add(Number(number) % 42);
}

console.log(set.size);