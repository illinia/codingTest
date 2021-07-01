let input = [
  '3',
  '0 0 13 40 0 37',
  '0 0 3 0 7 4',
  '1 1 1 1 1 5'
];

input.shift();

let funDistance = (a, b, c, d) => {
  return (Math.sqrt(Math.abs(a - c) ** 2 + Math.abs(b - d) ** 2));
};

for (value of input) {
  let [x1, y1, r1, x2, y2, r2] = value.split(' ').map(number => Number(number));
  let distance = funDistance(x1, y1, x2, y2);

  let rsum = r1 + r2;
  let rsub = Math.abs(r1 - r2);

  if (distance == 0 && rsub == 0) {
    console.log(-1);
  } else if (distance > rsum || distance < rsub) {
    console.log(0);
  } else if (distance == rsum || distance == rsub) {
    console.log(1);
  } else if (distance < rsum && distance > rsub) {
    console.log(2);
  }
}

// for (value of input) {
//   let [x1, y1, r1, x2, y2, r2] = value.split(' ').map(number => Number(number));
//   let longR = Math.max(r1, r2);
//   let shortR = Math.min(r1, r2);

//   let distance = funDistance(x1, y1, x2, y2);

//   if (distance === 0) {
//     if (r1 === r2) {
//       console.log(-1);
//     } else {
//       console.log(0);
//     }
//   } else if (distance > longR) {
//     if (distance > r1 + r2) {
//       console.log(0);
//     } else if (distance === r1 + r2) {
//       console.log(1);
//     } else if (distance < r1 + r2) {
//       console.log(2);
//     }
//   } else if (distance === longR) {
//     console.log(2);
//   } else if (distance < longR) {
//     if (distance + shorR < longR) {
//       console.log(0);
//     } else if (distance + shortR === longR) {
//       console.log(1);
//     } else if (distance + shortR > longR) {
//       console.log(2);
//     }
//   }
// };