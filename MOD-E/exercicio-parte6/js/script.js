function gerarTabuada() {
    var itabuada = document.getElementById('itabuada')
    var txtNum = document.getElementById('inum')
    var num = Number(txtNum.value)

    if (txtNum.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        cont = 1
        while (cont <= 10) {
            var mult = cont * num
            itabuada.innerHTML += `${num} x ${cont} = ${mult} `
            cont += 1
        }
    }
}