export default () => {
    const state = document.getElementById('selectState')

    async function stateConsult() {
        await fetch(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
        )
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    return `Tente novamente!`
                }
            })
            .then(data => {
                data.map( element => {
                    let option = document.createElement('option')

                    option.value = element.id
                    option.innerHTML = element.nome

                    state.appendChild(option)
                })
            })
            .catch(err => {
                alert(err)
            })
    }

    stateConsult()
}
