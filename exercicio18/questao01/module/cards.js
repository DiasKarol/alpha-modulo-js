export default () => {
    const img = document.getElementById('deck')
    const result = document.getElementById('result')

    async function getCards() {
        await fetch(`https://deckofcardsapi.com/api/deck/${img.dataset.id}/draw/?count=1`)
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return `Tente novamente!`
            }
        })
        .then(data => {
            let card = document.createElement('img')
            card.src = data.cards[0].image

            result.appendChild(card)
        })
        .catch(err =>{
            alert(err)
        })
    }

    result.innerHTML = ''

    for(let i = 0; i < 5; i++) {
        getCards()
    }
}