export default () => {
    const county = document.getElementById('selectCounty')
    const resultArea = document.getElementById('result')

    async function getWeather() {
        await fetch(`https://apiprevmet3.inmet.gov.br/previsao/${county.value}`)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    return `Tente novamente!`
                }
            })
            .then(data => {
                let result = data[county.value]
                let days = Object.keys(result)

                days.map((e, i) => {
                    let section = document.createElement('section')
                    let h2 = document.createElement('h2')
                    let div = document.createElement('div')
                    let h3 = document.createElement('h3')
                    let pR = document.createElement('p')
                    let img = document.createElement('img')
                    let pMa = document.createElement('p')
                    let pMi = document.createElement('p')

                    if (i < 2) {
                        h2.innerHTML = result[e].manha.dia_semana + ' - ' + e
                        section.appendChild(h2)

                        h3.innerHTML = 'manha'
                        pR.innerHTML = result[e].manha.resumo
                        img.src = result[e].manha.icone
                        pMi.innerHTML = 'Min: ' + result[e].manha.temp_min
                        pMa.innerHTML = 'Máx: ' + result[e].manha.temp_max

                        div.appendChild(h3)
                        div.appendChild(pR)
                        div.appendChild(img)
                        div.appendChild(pMi)
                        div.appendChild(pMa)
                        section.appendChild(div)

                        div = document.createElement('div')
                        h3 = document.createElement('h3')
                        pR = document.createElement('p')
                        img = document.createElement('img')
                        pMa = document.createElement('p')
                        pMi = document.createElement('p')

                        h3.innerHTML = 'tarde'
                        pR.innerHTML = result[e].tarde.resumo
                        img.src = result[e].tarde.icone
                        pMi.innerHTML = 'Min: ' + result[e].tarde.temp_min
                        pMa.innerHTML = 'Máx: ' + result[e].tarde.temp_max

                        div.appendChild(h3)
                        div.appendChild(pR)
                        div.appendChild(img)
                        div.appendChild(pMi)
                        div.appendChild(pMa)
                        section.appendChild(div)

                        div = document.createElement('div')
                        h3 = document.createElement('h3')
                        pR = document.createElement('p')
                        img = document.createElement('img')
                        pMa = document.createElement('p')
                        pMi = document.createElement('p')

                        h3.innerHTML = 'noite'
                        pR.innerHTML = result[e].noite.resumo
                        img.src = result[e].noite.icone
                        pMi.innerHTML = 'Min: ' + result[e].noite.temp_min
                        pMa.innerHTML = 'Máx: ' + result[e].noite.temp_max

                        div.appendChild(h3)
                        div.appendChild(pR)
                        div.appendChild(img)
                        div.appendChild(pMi)
                        div.appendChild(pMa)
                        section.appendChild(div)
                    } else {
                        h2.innerHTML = result[e].dia_semana + ' - ' + e
                        section.appendChild(h2)

                        h3.innerHTML = 'dia todo'
                        pR.innerHTML = result[e].resumo
                        img.src = result[e].icone
                        pMi.innerHTML = 'Min: ' + result[e].temp_min
                        pMa.innerHTML = 'Máx: ' + result[e].temp_max

                        div.appendChild(h3)
                        div.appendChild(pR)
                        div.appendChild(img)
                        div.appendChild(pMi)
                        div.appendChild(pMa)
                        section.appendChild(div)
                    }
                    resultArea.appendChild(section)
                })
            })
            .catch(err => {
                alert(err)
            })
    }

    county.addEventListener('change', getWeather)
}
