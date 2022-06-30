const takeCard = document.getElementById('deck')
const cardPosition = [
    document.getElementById('card1'),
    document.getElementById('card2'),
    document.getElementById('card3'),
    document.getElementById('card4'),
    document.getElementById('card5')
]
const result = document.getElementById('result')

var deck = []
var onTable = []

// Criando as cartas por naipe
function createDeck(naipe) {
    for (let i = 1; i <= 13; i++) {
        let card = {}
        card.naipe = naipe
        if (i == 1) {
            card.value = 1
            card.img = `${naipe}A.svg`
            deck.push(card)
            continue
        }
        if (i == 11) {
            card.value = 11
            card.img = `${naipe}J.svg`
            deck.push(card)
            continue
        }
        if (i == 12) {
            card.value = 12
            card.img = `${naipe}Q.svg`
            deck.push(card)
            continue
        }
        if (i == 13) {
            card.value = 13
            card.img = `${naipe}K.svg`
            deck.push(card)
            continue
        }
        card.value = i
        card.img = `${naipe}${i}.svg`
        deck.push(card)
    }
}

// Atribuindo as cartas ao objeto deck
createDeck('ouro')
createDeck('paus')
createDeck('copas')
createDeck('espada')

// Distribuindo cartas randomicamente
function random() {
    let random
    do {
        random = parseInt(Math.random() * 52)
    } while (onTable.find(e => e == random) == undefined ? false : true)
    onTable.push(random)
    return random
}

function showCards() {
    let cardsTable = []

    for (let i = 0; i < 5; i++) {
        let r = random()
        let card = {}
        card.img = deck[r].img
        card.value = deck[r].value
        card.naipe = deck[r].naipe
        cardsTable.push(card)
    }

    onTable = []

    let valueOrder = cardsTable.sort((a, b) => { 
        if (Number(a.value) < Number(b.value)) return -1
        if (Number(a.value) > Number(b.value)) return 1
        return 0
    })

    for (let i = 0; i < 5; i++) {
        cardPosition[i].innerHTML = `<img src="./imagens/${valueOrder[i].img}" alt="Carta de baralho virada para baixo">`
    }
    
    //Resultados
    if (valueOrder[4].value - valueOrder[3].value == 1 && 
        valueOrder[3].value - valueOrder[2].value == 1 && 
        valueOrder[2].value - valueOrder[1].value == 1 && 
        valueOrder[1].value - valueOrder[0].value == 1) {
            if (valueOrder[4].naipe == valueOrder[3].naipe && 
                valueOrder[3].naipe == valueOrder[2].naipe && 
                valueOrder[2].naipe == valueOrder[1].naipe && 
                valueOrder[1].naipe == valueOrder[0].naipe){
                    result.innerHTML = `Straight Flush`
                    return 
                } else {
                    result.innerHTML = `Sequência`
                    return
                }
    }

    if ((valueOrder[4].value == valueOrder[3].value && 
        valueOrder[3].value == valueOrder[2].value && 
        valueOrder[2].value == valueOrder[1].value) || 
        (valueOrder[3].value == valueOrder[2].value && 
        valueOrder[2].value == valueOrder[1].value && 
        valueOrder[1].value == valueOrder[0].value)){
            result.innerHTML = `Quadra`
            return
        }

    if (valueOrder[3].value == valueOrder[2].value && 
        valueOrder[2].value == valueOrder[1].value){
            result.innerHTML = `Trinca`
            return
        } 
    
    if (valueOrder[4].value == valueOrder[3].value && 
        valueOrder[3].value == valueOrder[2].value) {
            if (valueOrder[1].value == valueOrder[0].value) {
                result.innerHTML = `Full House`
                return
            } else {
                result.innerHTML = `Trinca`
                return
            }
        }

    if (valueOrder[2].value == valueOrder[1].value && 
        valueOrder[1].value == valueOrder[0].value){
            if (valueOrder[4].value == valueOrder[3].value){
                result.innerHTML = `Full House`
                return
            } else {
                result.innerHTML = `Trinca`
                return
            }
        }

    if (valueOrder[4].value == valueOrder[3].value) {
        if (valueOrder[2].value == valueOrder[1].value || 
            valueOrder[1].value == valueOrder[0].value){
                result.innerHTML = `Dois pares`
                return
            } else {
                result.innerHTML = `Par`
                return
            }
    }

    if (valueOrder[3].value == valueOrder[2].value) {
        if (valueOrder[1].value == valueOrder[0].value) {
            result.innerHTML = `Dois pares`
            return
        } else {
            result.innerHTML = `Par`
            return
        }
    }

    if (valueOrder[2].value == valueOrder[1].value || 
        valueOrder[1].value == valueOrder[0].value) {
            result.innerHTML = `Par`
            return
        }

        result.innerHTML = `Nada`

}

takeCard.addEventListener('click', showCards)