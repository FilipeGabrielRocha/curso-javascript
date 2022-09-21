function parimp(num){
    if (num % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(5)
console.log(res)