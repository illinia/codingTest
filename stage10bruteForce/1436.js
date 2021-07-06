let input = ['8'];

let number = Number(input[0]);

let arr = [];
let startNumber = 666;
while (arr.length < number) {
  if (String(startNumber).includes('666')) arr.push(startNumber);
  startNumber++;
}

console.log(arr[arr.length - 1]);