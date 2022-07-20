export default () => {
    const county = document.getElementById('selectCounty')
    const resultArea = document.getElementById('result')

    function getWeather() {
        return new Promise((resolve, reject) => {
            fetch(`https://apiprevmet3.inmet.gov.br/previsao/${county.value}`)
                .then(response => {
                    if (response.status == 200) {
                        return response.json()
                    } else {
                        reject(response.status)
                    }
                })
                .then(data => {
                    let result = data[county.value]
                    let weathers = []
                    let days = Object.keys(result)
                    days.forEach((e, i) => {
                        let weather = {}
                        /* weather.dia = e */
                        if (i < 2) {
                            weather[result[e].manha.dia_semana + ' - ' + e] = {
                                'manha': {
                                    'icone' : result[e].manha.icone,
                                    'resumo' : result[e].manha.resumo,
                                    'maxTemp' : result[e].manha.temp_max,
                                    'minTemp' : result[e].manha.temp_min
                                },
                                'tarde': {
                                    'icone' : result[e].tarde.icone,
                                    'resumo' : result[e].tarde.resumo,
                                    'maxTemp' : result[e].tarde.temp_max,
                                    'minTemp' : result[e].tarde.temp_min
                                },
                                'noite': {
                                    'icone' : result[e].noite.icone,
                                    'resumo' : result[e].noite.resumo,
                                    'maxTemp' : result[e].noite.temp_max,
                                    'minTemp' : result[e].noite.temp_min
                                }
                            }
                        } else {
                            weather[result[e].dia_semana + ' - ' + e] = {
                                'dia todo': {
                                    'icone' : result[e].icone,
                                    'resumo' : result[e].resumo,
                                    'maxTemp' : result[e].temp_max,
                                    'minTemp' : result[e].temp_min
                                }
                            }
                        }
                        weathers.push(weather)
                    })
                    resolve(weathers)
                })
        })
    }


    county.addEventListener('change', () => {
        getWeather()
            .then(resp => {
                resultArea.innerHTML = ''

                resp.forEach(element => {
                    let title = Object.keys(element)[0]
                    let section = document.createElement('section')
                    let h2 = document.createElement('h2')

                    h2.innerHTML = title
                    section.appendChild(h2)

                    let period = Object.keys(element[title])

                    period.forEach(e => {
                        let div = document.createElement('div')
                        let h3 = document.createElement('h3')
                        let pR = document.createElement('p')
                        let img = document.createElement('img')
                        let pMa = document.createElement('p')
                        let pMi = document.createElement('p')

                        h3.innerHTML = e
                        pR.innerHTML = element[title][e].resumo
                        img.src = element[title][e].icone
                        pMi.innerHTML = 'Min: ' + element[title][e].minTemp
                        pMa.innerHTML = 'Máx: ' + element[title][e].maxTemp

                        div.appendChild(h3)
                        div.appendChild(pR)
                        div.appendChild(img)
                        div.appendChild(pMi)
                        div.appendChild(pMa)
                        section.appendChild(div)
                    })
                    
                    resultArea.appendChild(section) 
                });
            })
    })
    
}
