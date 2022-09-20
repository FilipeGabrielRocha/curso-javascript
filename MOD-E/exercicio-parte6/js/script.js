function gerarTabuada() {
    var itabuada = document.getElementById('itabuada')
    var txtNum = document.getElementById('inum')

    if (txtNum.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {    
        var num = Number(txtNum.value)
        cont = 1
        itabuada.innerHTML = ''
        while (cont <= 10) {
            var item = document.createElement('option')
            var mult = cont * num
            item.text = `${num} x ${cont} = ${mult}`
            item.value = `itabuada${cont}`
            itabuada.appendChild(item)
            cont += 1
        }
    }
}