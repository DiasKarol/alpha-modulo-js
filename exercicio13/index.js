const campo = document.querySelectorAll('.elemento')
const result = document.querySelectorAll('span')
const reinicia = document.querySelectorAll('p')
var jogador = 'X'
var jogadas = 0

var matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

function jogo(e) {
    let linha = Number(e.dataset.pos[0])
    let coluna = Number(e.dataset.pos[1])

    if (matriz[linha][coluna] == '') {
        matriz[linha][coluna] = jogador
        jogadas++
    } else {
        alert('Opção inválida!')
        return
    }

    imprimir()
    vencedor()

    jogador = jogador == 'X' ? 'O' : 'X'
}

function imprimir() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            campo[3*i + j].innerHTML = matriz[i][j] 
        }
    }
}

function desabilita() {
    campo.forEach(el => el.disabled = true)
}

function vencedor() {
    for (let i = 0; i < 3; i++) {
        if (
            matriz[i][0] != '' &&
            matriz[i][0] == matriz[i][1] &&
            matriz[i][0] == matriz[i][2]
        ) {
            if (matriz[i][0] == 'X') {
                result[0].innerHTML = 'Jogador 1 é o vencedor'
            } else {
                result[0].innerHTML = 'Jogador 2 é o vencedor'
            }
            desabilita()
            return
        }

        if (
            matriz[0][i] != '' &&
            matriz[0][i] == matriz[1][i] &&
            matriz[0][i] == matriz[2][i]
        ) {
            if (matriz[0][i] == 'X') {
                result[0].innerHTML = 'Jogador 1 é o vencedor'
            } else {
                result[0].innerHTML = 'Jogador 2 é o vencedor'
            }
            desabilita()
            return
        }
    }

    if (
        matriz[0][0] != '' &&
        matriz[0][0] == matriz[1][1] &&
        matriz[0][0] == matriz[2][2]
    ) {
        if (matriz[0][0] == 'X') {
            result[0].innerHTML = 'Jogador 1 é o vencedor'
        } else {
            result[0].innerHTML = 'Jogador 2 é o vencedor'
        }
        desabilita()
        return
    }

    if (
        matriz[0][2] != '' &&
        matriz[0][2] == matriz[1][1] &&
        matriz[0][2] == matriz[2][0]
    ) {
        if (matriz[0][2] == 'X') {
            result[0].innerHTML = 'Jogador 1 é o vencedor'
        } else {
            result[0].innerHTML = 'Jogador 2 é o vencedor'
        }
        desabilita()
        return
    }

    if (jogadas == 9) {
        result[0].innerHTML = 'Ninguém venceu, reinicie a partida!'
    }
}

function reiniciar() {
    jogador = 'X'
    jogadas = 0
    
    matriz = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    campo.forEach(el => el.disabled = false)

    imprimir()

    result[0].innerHTML = ''
}

campo.forEach(e => e.addEventListener('click', () => jogo(e)))
reinicia[0].addEventListener('click', reiniciar)