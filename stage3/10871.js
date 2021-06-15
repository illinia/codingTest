let input = ["10 5", "1 10 4 9 2 3 8 5 7 6"];

let X = Number(input[0].split(" ")[1]);

let resultArr = input[1].split(" ").map(number => Number(number)).filter(number => number < X);
console.log(resultArr.join(" "));