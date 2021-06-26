let input = [
  '3',
  '0 2390234'
];

let arr = input.splice(1, input.length).map(value => value.split(' ').map(value => Number(value)));

for (value of arr) {
  let count = 1;
  let [x, y] = value;
  let length = y - x;

  let oneLessNumber = Math.ceil(Math.sqrt(length)) - 1;
  let oneMoreNumber = oneLessNumber + 1;
  let middleNumber = Math.pow(oneLessNumber, 2);

  if (length === 2) {
    console.log(2);
  } else if (length === 1) {
    console.log(1);
  } else if (length <= middleNumber + oneLessNumber) {
    for (let i = 2; i <= oneLessNumber; i++) {
      count += 2;
    }
    count += 1;
    console.log(count);
  } else {
    for (let i = 2; i <= oneLessNumber; i++) {
      count += 2;
    }
    count += 2;
    console.log(count);
  }
}
  // let countOfCount = 0;
  // let leftCountofCount = 0;
  // let booleanOfPlusCount = false;
  // let maxLength = 0;

  // for (let i = 1; i <= length; i++) {
  //   if (Number.isInteger(Math.sqrt(i)) === true) {
  //     maxLength++
  //     countOfCount = Math.sqrt(i);
  //     leftCountofCount = Math.sqrt(i) + 1;
  //     if (i === length) {
  //       console.log('answer', count);
  //     }
  //     count++
  //   } else if (countOfCount !== 0) {
  //     countOfCount--
  //     if (countOfCount === 0) {
  //       booleanOfPlusCount = !booleanOfPlusCount;
  //     }
  //   } else if (countOfCount === 0) {
  //     if (booleanOfPlusCount) {
  //       count++;
  //       booleanOfPlusCount = !booleanOfPlusCount;
  //     }
  //     leftCountofCount--
  //   }
  //   if (i === length) {
  //     console.log('answer', count);
  //   }
  // }

  // let remainder = 0;
  // for (let i = 1; length > 0; i++) {
  //   if ((length / i) <= 3) {
  //     remainder = length % i
  //     count += Math.floor(length / i) + (remainder === 0 ? 0 : 1);
  //     length = length - count;
  //   } else if ((length / i) > 3) {
  //     count += 2;
  //     length = length - (i * 2);
  //   }
  // }
  // console.log(count);


// 1221
// 12211
// 12221
// 12321
// 123211
// 123221
// 123321
// 1233211
// 1233221
// 1233321
// 1234321
// 12343211