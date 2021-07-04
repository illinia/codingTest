let input = [
  '10 500',
  '93 181 245 214 315 36 185 138 216 295'
];

let limit = input[0].split(' ')[1];
let cards = input[1].split(' ').map(value => Number(value));

let sum = 0;
let answer = 0;
let log = '';

for (let i = 0; i < cards.length; i++) {
  for (let j = 1; j < cards.length; j++) {
    if (j !== i) {
      for (let k = 2; k < cards.length; k++) {
        if (k !== j && k !== i) {
          sum = cards[i] + cards[j] + cards[k];
          if (sum > answer && sum <= limit) {
            answer = sum;
            log = `${cards[i]} ${cards[j]} ${cards[k]}`
          }
        }
      }
    }
  }
}
console.log(answer);