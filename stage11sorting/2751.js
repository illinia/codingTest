let input = [
  '5',
  '5',
  '2',
  '3',
  '4',
  '1'
];

// let arr = input.slice(1, input.length).map(value => Number(value));
// arr.sort((a, b) => a - b);
// console.log(arr.join('\n'));

// 병합 알고리즘
input.shift();
let arr = input.map(value => Number(value));

const mergeSort = (array) => {
  if (array.length < 2) return array;
  const pivot = Math.floor(array.length / 2);
  const left = array.slice(0, pivot);
  const right = array.slice(pivot, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

console.log(mergeSort(arr));

// 퀵 알고리즘
// input.shift();
// let arr = input.map(value => Number(value));

// const divideFunc = (array, leftIndex, rightIndex, pivotIndex) => {
//   let temp;
//   let pivot = array[pivotIndex];
//   while (leftIndex <= rightIndex) {
//     while (array[leftIndex] < pivot) {
//       leftIndex++;
//     }
//     while (array[rightIndex] > pivot) {
//       rightIndex--;
//     }
//     if (leftIndex <= rightIndex) {
//       temp = array[leftIndex];
//       array[leftIndex] = array[rightIndex];
//       array[rightIndex] = temp;
//       leftIndex++;
//       rightIndex--;
//     }
//   }
//   temp = array[leftIndex];
//   array[leftIndex] = array[pivotIndex];
//   array[pivotIndex] = temp;
//   return leftIndex;
// }

// const quickSort = (array, left, right) => {
//   if (!left) left = 0;
//   if (!right) right = array.length - 1;
//   let pivotIndex = right;
//   pivotIndex = divideFunc(array, left, right - 1, pivotIndex);
//   if (left < pivotIndex - 1) {
//     quickSort(array, left, pivotIndex - 1);
//   }
//   if (pivotIndex + 1 < right) {
//     quickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// }

// console.log(quickSort(arr).join('\n'))