let input = [
  '11',
  '10987654321'];

console.log(input[1].split('').reduce((pre, cur) => Number(pre) + Number(cur), 0));