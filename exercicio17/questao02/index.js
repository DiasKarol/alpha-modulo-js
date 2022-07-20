import home from './module/home.js'
import selectState from './module/selectState.js'
import selectCounty from './module/selectCounty.js'
import weather from './module/weather.js'

const main = document.getElementById('root')

window.addEventListener('load', () => {
    main.appendChild(home())

    selectState()
    selectCounty()
    weather()
})
