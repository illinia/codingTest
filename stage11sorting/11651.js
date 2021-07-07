let input = [
  '5',
  '0 4',
  '1 2',
  '1 -1',
  '2 2',
  '3 3'
];

input.shift();
let arr = input.map(value => value.split(' ').map(value => Number(value)));

const mergeSort = (array) => {
  if (array.length < 2) return array;
  const pivot = Math.floor(array.length / 2);
  const left = array.slice(0, pivot);
  const right = array.slice(pivot, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

let result = [];
const merge = (left, right) => {
  result = [];
  while (left.length && right.length) {
    if (left[0][1] < right[0][1]) {
      result.push(left.shift());
    } else if (left[0][1] > right[0][1]) {
      result.push(right.shift());
    } else if (left[0][1] === right[0][1]) {
      if (left[0][0] < right[0][0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

console.log(mergeSort(arr).join('\n').replace(/,/gi, ' '));