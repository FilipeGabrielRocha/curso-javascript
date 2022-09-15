function carregar() {
    var res = window.document.getElementById('res')
    var img = window.document.getElementById('imagem')
    var horaAtual = new Date()
    var hora = horaAtual.getHours()
    res.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora < 12 ) {
        window.document.body.style.background = '#e2cd9f'
        img.src = 'image/manha.jpg'
    } else if (hora < 18) {
        window.document.body.style.background = '#b9846f'
        img.src = 'image/tarde.jpg'
    } else {
        window.document.body.style.background = '#515154'
        img.src = 'image/noite.jpg'
    }
}