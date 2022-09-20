let num = [5, 7, 8, 9, 3]
num.push(1)

console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(num[0])
num.sort()
console.log(num)

for (let pos = 0; pos < num.length; pos+=1) {
    console.log(`${num[pos]}`)
}

// for (let pos in num) {
//     console.log(num[pos])
// }
console.log('==============================')
let pos = num.indexOf(9)
console.log(pos)