import home from './module/home.js'
import deck from './module/deck.js'

const main = document.getElementById('root')

window.addEventListener('load', () => {
    main.appendChild(home())

    deck()
})