function calcularIdade() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var txtAnoNasci = window.document.getElementById('inascimento')
    var numAnoNasci = Number(txtAnoNasci.value)
    var res = window.document.getElementById('res')
    var img = window.document.getElementById('foto')

    if (numAnoNasci.length == 0 || numAnoNasci > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
        } else {
            var sexo = document.getElementsByName('radsex')
            var idade = anoAtual - numAnoNasci
            var genero = ''
            if (sexo[0].checked) {
                genero = 'Homem'
                if (idade <= 10) {
                    img.src = 'image/crianca-homem.jpg'
                } else if (idade < 21) {
                    img.src = 'image/adolescente-homem.jpg'
                } else if (idade < 59) {
                    img.src = 'image/adulto-homem.jpg'
                } else {
                    img.src = 'image/idoso-homem.jpg'
                }
            } else {
                genero = 'Mulher'
                if (idade <= 10) {
                    img.src = 'image/crianca-mulher.jpg'
                } else if (idade < 21) {
                    img.src = 'image/adolescente-mulher.jpg'
                } else if (idade < 59) {
                    img.src = 'image/adulto-mulher.jpg'
                } else {
                    img.src='image/idosa-mulher.jpg'
                }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
}