let input = [
  '5',
  '5',
  '2',
  '3',
  '4',
  '1'
];

// let arr = input.slice(1, input.length).map(value => Number(value));

// 선택 정렬
// for (let i = 0; i < arr.length; i++) {
//   let minValue = Math.min(...arr.slice(i, arr.length));
//   let minIndex = arr.indexOf(minValue);
//   arr[minIndex] = arr[i];
//   arr[i] = minValue;
// };

// console.log(arr.join('\n'));

// 삽입 정렬
// let arr = input.slice(1, input.length).map(value => Number(value));

// for (let i = 1; i < arr.length; i++) {
//   let value = arr[i];
//   let compareIndex = i - 1;
//   while (true) {
//     if (arr[compareIndex] < arr[i]) {
//       arr.splice(i, 1);
//       arr.splice(compareIndex + 1, 0, value);
//       break;
//     }
//     if (compareIndex === -1) {
//       arr.splice(i, 1);
//       arr.splice(0, 0, value);
//       break;
//     }
//     compareIndex--;
//   }
// }

// console.log(arr.join('\n'));

// 버블 정렬
let arr = input.slice(1, input.length).map(value => Number(value));

for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length - i; j++) {
    if (arr[j - 1] > arr[j]) {
      let value = arr[j];
      arr.splice(j, 1);
      arr.splice(j - 1, 0, value);
    }
  }
}
console.log(arr.join('\n'));