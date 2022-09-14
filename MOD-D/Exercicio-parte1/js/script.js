var corpo = window.document.body
var horaAtual = new Date()
var hora = horaAtual.getHours()
var min = horaAtual.getMinutes()
var res = window.document.getElementById('res')
var imagem = window.document.getElementById('imagem')
res.innerHTML = `<p>Agora são ${hora}:${min} horas.</p>`
if (hora < 12 ) {
    corpo.style.background = 'yellow'
    imagem.innerHTML += `<img src="image/manha.jpg" alt="">`
} else if (hora <= 18) {
    corpo.style.background = 'orange'
    imagem.innerHTML += `<img src="image/tarde.jpg" alt="">`
} else {
    corpo.style.background = 'darkblue'
    imagem.innerHTML += `<img src="image/noite.jpg" alt="">`
}