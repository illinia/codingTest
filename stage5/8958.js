let input = ['5',
  'OOXXOXXOOO',
  'OOXXOOXXOO',
  'OXOXOXOXOXOXOX',
  'OOOOOOOOOO',
  'OOOOXOOOOXOOOOX'];

for (let i = 1; i < input.length; i++) {
  let count = 0;
  let score = 0;
  for (element of input[i]) {
    if (element === 'O') {
      count++;
      score += count;
    } else if (element === 'X') {
      count = 0;
    }
  };
  console.log(score);
}