export default () => {
    let cardA = document.getElementById('firstCard')
    let cardB = document.getElementById('secondCard')
    const listResult = document.getElementById('listResult')

    function cards(cartela) {
        let numbers = []
        let card = []

        function creatNumbers() {
            for (let i = 1; i <= 75; i++) {
                numbers.push(i)
            }
        }

        function rdnNumber(min, max) {
            return parseInt(Math.random() * (max - min) + min)
        }

        function creatCard() {
            for (let i = 0; i < 10; i++) {
                let sort = rdnNumber(0, numbers.length)
                card.push(numbers[sort])

                let btn = document.createElement('button')
                btn.innerHTML = numbers[sort]
                btn.dataset.num = numbers[sort]
                btn.setAttribute('id', cartela.id + i)
                btn.addEventListener('click', () => check(cartela.id + i))
                cartela.appendChild(btn)

                numbers.splice(sort, 1)
            }

            cartela.dataset.bingo = 0
        }

        function check(cardNumber) {
            let sorted = JSON.parse(listResult.dataset.sorted)
            let btn = document.getElementById(cardNumber)
            let _cardId = cardNumber.slice(0, -1)
            let cardId = document.getElementById(_cardId)

            if (sorted.includes(Number(btn.dataset.num))) {
                btn.disabled = true
                btn.classList.add('checkedclass')
                cardId.dataset.bingo = Number(cardId.dataset.bingo) + 1
            }

            if (cardId.dataset.bingo == 10) {
                let nome = _cardId == 'firstCard' ? 'Cartela A' : 'Cartela B'

                alert(`Bingo!!! \n ${nome} é o vencedor!`)
            }
        }

        creatNumbers()
        creatCard()
    }

    cards(cardA)
    cards(cardB)
}