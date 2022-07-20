export default () => {
    const state = document.getElementById('selectState')
    const county = document.getElementById('selectCounty')

    async function countyConsult() {
        await fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.value}/municipios`
        )
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    return `Tente novamente!`
                }
            })
            .then(data => {
                data.map(element => {
                    let option = document.createElement('option')

                    option.value = element.id
                    option.innerHTML = element.nome

                    county.appendChild(option)
                })
            })
            .catch(err => {
                alert(err)
            })
    }

    state.addEventListener('change', () => {
        county.innerHTML = '<option value=""> Selecione </option>'
        countyConsult()
    })
}
