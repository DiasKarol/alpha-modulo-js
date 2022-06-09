function transformar() {
    let produto = document.getElementById('produtos').value
    let retorno = document.getElementById('campoResultado')

    switch (produto) {
        case 'boneca':
            retorno.innerHTML = `
            <img src="./imagens/boneca.jpg" alt="boneca de feltro" />
            <h2>Boneca</h2>
            <p>Valor: R$50</p>`
            break;

        case 'casalcaipira':
            retorno.innerHTML = `
            <img src="./imagens/casalcaipira.jpg" alt="bonecos de feltro casal caipira<" />
            <h2>Casal caipira</h2>
            <p>Valor: R$100</p>`
            break;

        case 'balanco':
            retorno.innerHTML = `
            <img src="./imagens/portamaternidadebalanco.jpg" alt="Porta maternidade em feltro menina no balanço" />
            <h2>Menina no balanço</h2>
            <p>Valor: R$120</p>`
            break;

        case 'balao':
            retorno.innerHTML = `
            <img src="./imagens/portamaternidadebalao.jpg" alt="Porta maternidade em feltro menino no balão" />
            <h2>Menino no balão</h2>
            <p>Valor: R$120</p>`
            break;

        case 'monica':
            retorno.innerHTML = `
            <img src="./imagens/monica.jpg" alt="boneca de feltro Mônica e sansão" />
            <h2>Mônica e Sansão</h2>
            <p>Valor: R$80</p>`
            break;

        case 'urso':
            retorno.innerHTML = `
            <img src="./imagens/urso.jpg" alt="boneco de feltro urso aviador" />
            <h2>Boneca</h2>
            <p>Valor: R$50</p>`
            break;
    }
}

let btn = document.getElementById('btn')
btn.addEventListener('click', transformar)