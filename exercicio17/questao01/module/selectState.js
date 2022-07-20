export default () => {
    const state = document.getElementById('selectState')

    function stateConsult() {
        return new Promise((resolve, reject) => {
            fetch(
                'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
            )
                .then(response => {
                    if (response.status == 200) {
                        return response.json()
                    } else {
                        return Promise.reject(`Tente novamente!`)
                    }
                })
                .then(data => {
                    let stateArray = []
                    data.forEach(element => {
                        let dicState = { id: element.id, nome: element.nome }
                        stateArray.push(dicState)
                    })
                    resolve(stateArray)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    stateConsult()
        .then(response => {
            response.forEach(element => {
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
