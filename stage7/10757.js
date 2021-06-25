let input = ['9223372036854775807 9223372036854775808']

let [a, b] = input[0].split(' ')
console.log(String(BigInt(a) + BigInt(b)))