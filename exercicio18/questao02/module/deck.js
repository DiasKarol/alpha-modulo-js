import cards from './cards.js'

export default () => {
    const img = document.getElementById('deck')

    async function deck() {
        await fetch (`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return `Tente novamente!`
            }
        })
        .then(data => {
            img.dataset.id = data.deck_id
        })
        .catch(err =>{
            alert(err)
        })
    }
    deck()

    img.addEventListener('click', cards)
}