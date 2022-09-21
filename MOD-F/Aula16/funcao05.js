// RECURSIVIDADE
function fatorial2(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial2(num - 1)
    }
}

console.log(fatorial2(5))