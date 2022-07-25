export default () => {
    const imgDeck = document.getElementById('deck')
    const result = document.getElementById('result')

    const getCards1 = new Promise((resolve, reject) => {
        fetch(`https://deckofcardsapi.com/api/deck/${imgDeck.dataset.id}/draw/?count=1`)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    reject(`Tente novamente!`)
                }
            })
            .then(data => {
                resolve(data.cards[0].image)
            })
    })

    const getCards2 = new Promise((resolve, reject) => {
        fetch(`https://deckofcardsapi.com/api/deck/${imgDeck.dataset.id}/draw/?count=1`)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    reject(`Tente novamente!`)
                }
            })
            .then(data => {
                resolve(data.cards[0].image)
            })
    })

    const getCards3 = new Promise((resolve, reject) => {
        fetch(`https://deckofcardsapi.com/api/deck/${imgDeck.dataset.id}/draw/?count=1`)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    reject(`Tente novamente!`)
                }
            })
            .then(data => {
                resolve(data.cards[0].image)
            })
    })

    const getCards4 = new Promise((resolve, reject) => {
        fetch(`https://deckofcardsapi.com/api/deck/${imgDeck.dataset.id}/draw/?count=1`)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    reject(`Tente novamente!`)
                }
            })
            .then(data => {
                resolve(data.cards[0].image)
            })
    })

    const getCards5 = new Promise((resolve, reject) => {
        fetch(`https://deckofcardsapi.com/api/deck/${imgDeck.dataset.id}/draw/?count=1`)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    reject(`Tente novamente!`)
                }
            })
            .then(data => {
                resolve(data.cards[0].image)
            })
    })

    result.innerHTML = ''

    Promise.all([getCards1, getCards2, getCards3, getCards4, getCards5])
        .then(response => {
            response.forEach(e => {
                let img = document.createElement('img')
                img.src = e
                result.appendChild(img)
            })
        })
        .catch(err => {
            alert(err)
        }) 
}