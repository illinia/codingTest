let input = ['2 1 5'];
// let input = ['5 1 6'];
// let input = ['100 99 1000000000'];

let [A, B, V] = input[0].split(' ').map(value => Number(value));

let oneDay = A - B;
let climbDivideOneDay = A / oneDay;

console.log(Math.ceil(V / oneDay - climbDivideOneDay) + 1);