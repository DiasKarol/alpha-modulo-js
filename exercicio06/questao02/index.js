var mostrar = document.getElementById('campoimagem')
var seg = document.getElementById('seg')
var segundos = 60

var somExplosao = new Audio((URL = './arquivos/bomb-03.wav'))
var somtick = new Audio((URL = './arquivos/beep-10.wav'))
var somclap = new Audio((URL = './arquivos/clap.mp3'))

const tempo = setInterval(decrescente, 1000)

function explosao() {
    somExplosao.play()
    mostrar.innerHTML = `<img src="./arquivos/boom.jpg" alt="A bomba explodiu">`
    mostrar.removeEventListener('click', apagar)
}

function decrescente() {
    segundos--
    seg.innerHTML = segundos

    somtick.play()

    if (segundos == 0) {
        clearInterval(tempo)
        explosao()
    }
}

function apagar() {
    clearInterval(tempo)
    somclap.play()

    mostrar.innerHTML = `<img src="./arquivos/bomb2.jpg" alt="Você apagou a bomba!">`
}

mostrar.addEventListener('click', apagar)
seg.innerHTML = segundos