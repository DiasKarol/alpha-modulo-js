var mostrar = document.getElementById('campoimagem')


const timeout = setTimeout(explosao, 10000);

function explosao() {
    let somExplosao = new Audio(URL='./arquivos/bomb-03.wav')/* 
    let somExplosao = document.getElementById('meuAudio') */

    somExplosao.play()
    mostrar.innerHTML = `<img src="./arquivos/boom.jpg" alt="A bomba explodiu">`
}

function apagar() {
    clearTimeout(timeout)

    mostrar.innerHTML = `<img src="./arquivos/bomb2.jpg" alt="Você apagou a bomba!">`
}

mostrar.addEventListener('click', apagar)