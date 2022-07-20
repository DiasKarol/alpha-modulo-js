export default () => {
    const state = document.getElementById('selectState')
    const county = document.getElementById('selectCounty')

    function countyConsult() {
        return new Promise((resolve, reject) => {
            fetch(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.value}/municipios`
            )
                .then(response => {
                    if (response.status == 200) {
                        return response.json()
                    } else {
                        return Promise.reject(`Tente novamente!`)
                    }
                })
                .then(data => {
                    let countyArray = []
                    data.forEach(element => {
                        let dicCounty = { id: element.id, nome: element.nome }
                        countyArray.push(dicCounty)
                    })
                    resolve(countyArray)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    state.addEventListener('change', () => {
        county.innerHTML = '<option value=""> Selecione </option>'
        countyConsult()
            .then(response => {
                response.forEach(element => {
                    let option = document.createElement('option')

                    option.value = element.id
                    option.innerHTML = element.nome

                    county.appendChild(option)
                })
            })
            .catch(err => {
                alert(err)
            })
    })
}
