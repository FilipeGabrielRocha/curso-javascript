function contar() {
    var res = document.getElementById('res')

    var txtInicio = document.getElementById('iinicio')
    var txtFim = document.getElementById('ifim')
    var txtPasso = document.getElementById('ipasso')

    var inicio = Number(txtInicio.value)
    var fim = Number(txtFim.value)
    var passo = Number(txtPasso.value)

    res.innerHTML = 'Contando:'

    if (txtInicio.value.length == 0 || txtFim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (txtPasso.value.length == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
        // WHILE
        while (inicio <= fim) {
            res.innerHTML += `${inicio}&#x1F449; `
            inicio += passo
        }

        // DO WHILE
        // do {
        //     res.innerHTML += `${inicio}&#x1F449; `
        //     inicio += passo
        // } while (inicio <= fim)

        // FOR
        // for (inicio; inicio <= fim; inicio += passo) {
        //     res.innerHTML += `${inicio}&#x1F449; `
        // }

        res.innerHTML += '&#x1F3C1;'
    } else {
        // WHILE
        while (inicio <= fim) {
            res.innerHTML += `${inicio}&#x1F449; `
            inicio += passo
        }

        // DO WHILE
        // do {
        //     res.innerHTML += `${inicio}&#x1F449; `
        //     inicio += passo
        // } while (inicio <= fim)

        // FOR
        // for (inicio; inicio <= fim; inicio += passo) {
        //     res.innerHTML += `${inicio}&#x1F449; `
        // }
        res.innerHTML += '&#x1F3C1;'
    }
}