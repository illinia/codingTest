let input = [
  '4',
  'happy',
  'new',
  'year',
  'a'];

let arr = input.filter((_, index) => index !== 0);
let count = 0;

arr.forEach(words => {
  let result = true;
  words.split('').forEach((value, index, word) => {
    if ((word.indexOf(value, index + 1) !== -1) && (word[index + 1] !== value)) {
      result = false;
    };
  });
  result ? count++ : '';
});

console.log(count);