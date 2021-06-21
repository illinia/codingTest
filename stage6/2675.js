let input = [
  '2',
  '3 ABC',
  '5 /HTP'];

let testCase = input.filter((_, index) => index !== 0);

testCase.forEach((value) => {
  let [count, caseString] = value.split(' ');
  let result = '';

  for (word of caseString) {
    result += word.repeat(Number(count));
  }
  console.log(result);
})