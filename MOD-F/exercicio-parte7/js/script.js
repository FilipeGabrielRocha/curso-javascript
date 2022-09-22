let num = document.getElementById('inumero')
let lista = document.getElementById('ilistanum')
let res = document.getElementById('res')
let valores = []

function numeroValido(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(num, lista) {
    if (lista.indexOf(num) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (numeroValido(Number(num.value)) && !naLista(Number(num.value), valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text += `Valor ${num.value} adicionado.`
        ilistanum.appendChild(item)
    } else {
        alert('[ERRO] Número inválido ou já existente')
    }
    res.innerHTML = ''
}

function somar(lista) {
    let total = 0
    for (let pos in lista) {
        total += lista[pos]
    }
    return total
}

function media(tamanho, lista) {
    let total = 0
    for (let pos in lista) {
        total += lista[pos]
    }
    media = total / tamanho
    return media
}

function finalizar() {
    if (valores.length > 0) {
        let tamanho = valores.length
        res.innerHTML = `<p>Ao todo, temos ${tamanho} números cadastrados.</p>`
        valores.sort()
        res.innerHTML += `<p>O maior valor informado foi ${valores[Number(tamanho-1)]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${Number(somar(valores))}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${Number(media(tamanho, valores))}.</p>`
    } else {
        res.innerHTML = 'Nada foi adicionado'
    }
}