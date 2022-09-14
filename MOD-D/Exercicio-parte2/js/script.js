function calcularIdade() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var txtAnoNasci = window.document.getElementById('inascimento')
    var numAnoNasci = Number(txtAnoNasci.value)
    var idade = anoAtual - numAnoNasci

    // ate aqui é idade

    var sexoM = window.document.getElementsByName('sexo')[0]
    var sexoF = window.document.getElementsByName('sexo')[1]

    // Aqui é o teste
    var res = window.document.getElementById('res')
    if (idade <= 14) {
        if (sexoM == 'Homem') {
            res.innerHTML += `<p>Detectamos ${sexoM} com ${idade} anos.</p>`
            res.innerHTML += `<img src="image/crianca-homem.jpg" alt="">`
        } else {
            res.innerHTML += `<p>Detectamos ${sexoF} com ${idade} anos.</p>`
            res.innerHTML += `<img src="image/crianca-mulher.jpg" alt="">`
        }
    } else if (idade <= 21) {
        if (sexo == 'Homem') {
            res.innerHTML += `<p>Detectamos ${txtSexoM} com ${idade} anos.</p>`
            res.innerHTML += `<img src="image/adolescente-homem.jpg" alt="">`
        } else {
            res.innerHTML += `<p>Detectamos ${txtSexoM} com ${idade} anos.</p>`
            res.innerHTML += `<img src="image/adolescente-mulher.jpg" alt="">`
        }
    } else if (idade <= 59) {
        if (sexo == 'Homem') {
            res.innerHTML += `<p>Detectamos ${txtSexoM} com ${idade} anos.</p>`
            res.innerHTML += `<img src="image/adulto-homem.jpg" alt="">`
        } else {
            res.innerHTML += `<p>Detectamos ${txtSexoM} com ${idade} anos.</p>`
            res.innerHTML += `<img src="image/adulto-mulher.jpg" alt="">`
        }
    } else if (idade >= 60) {
        if (sexo == 'Homem') {
            res.innerHTML += `<p>Detectamos ${txtSexoM} com ${idade} anos.</p>`
            res.innerHTML += `<img src="image/idoso-homem.jpg" alt="">`
        } else {
            res.innerHTML += `<p>Detectamos ${txtSexoM} com ${idade} anos.</p>`
            res.innerHTML += `<img src="image/idosa-mulher.jpg" alt="">`
        }
    } else if (idade <= 0) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
}