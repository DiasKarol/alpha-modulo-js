var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var relogio = document.getElementById('relogio')
var btn = document.getElementById('btn')

var somAlarme = new Audio(URL = './som/beep-01.wav')

var interval 
var final

function contagem() {
    let minuto = minutos.value
    let segundo = segundos.value

    if (minuto == 0 && segundo == 0) {
        somAlarme.play()
        return
    } 
    if (segundo != 0) {
        segundo--
    } else {
        minuto--
        segundo = 59
    }

    if ((minuto * 60 + segundo) <= final) {
        relogio.classList.add('final')
    }

    minutos.value = minuto
    segundos.value = segundo
}

function parar() {
    clearInterval(interval)
    btn.removeEventListener('click', parar)
    btn.addEventListener('click', armar)
    btn.innerHTML = 'Iniciar'
    relogio.classList.remove('final')

    minutos.disabled = false
    segundos.disabled = false

    minutos.value = 0
    segundos.value = 0
}

function armar() {
    let minuto = Number(minutos.value)
    let segundo = Number(segundos.value)

    minutos.disabled = true
    segundos.disabled = true

    final = (minuto * 60 + segundo) * 5 / 100

    interval = setInterval(contagem, 1000)

    btn.removeEventListener('click', armar)
    btn.innerHTML = 'Parar'
    btn.addEventListener('click', parar)
    relogio.classList.remove('final')
}

for (let i = 0; i < 60; i++) { // o "i" esta sendo utilizado como variavel auxiliar. 
    minutos.innerHTML += `<option value=${i}>${i}</option>` //+= concatena o conteudo ja existente no HTML, neste caso, adicionando do 0 ao 59
    segundos.innerHTML += `<option value=${i}>${i}</option>`
}

btn.addEventListener('click', armar)