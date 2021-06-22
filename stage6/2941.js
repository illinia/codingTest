let input = ['ljes=njakljes=njakljes=njak'];

let result = input[0];
let replaceWords = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

replaceWords.forEach(value => {
  let regExp = new RegExp(value, "gi")
  result = result.replace(regExp, 1)
});
console.log(result.length);