function transformar() {

    let resultado = {} /* criando um dicionário */

    let valor = document.getElementById('data').value
    let data = new Date(valor + ' ')

    resultado.dia = data.getDate()    /* inserindo dados ao dicionário */
    resultado.mes = data.getMonth() + 1
    resultado.ano = data.getFullYear()
    resultado.milissegundo = data.getTime()

    let diasemana = data.getDay() /*começa no domingo - 0 */

    switch (diasemana) {
        case 0:
            resultado.diaSemana = 'Domingo'
            break;

        case 1:
            resultado.diaSemana = 'Segunda-feira'
            break;

        case 2:
            resultado.diaSemana = 'Terça-feira'
            break;

        case 3:
            resultado.diaSemana = 'Quarta-feira'
            break;

        case 4:
            resultado.diaSemana = 'Quinta-feira'
            break;

        case 5:
            resultado.diaSemana = 'Sexta-feira'
            break;

        case 6:
            resultado.diaSemana = 'Sábado'
            break;
    }

    switch (resultado.mes) {
        case 1: 
            resultado.mesExtenso = 'Janeiro'
            break;

        case 2: 
            resultado.mesExtenso = 'Fevereiro'
            break;

        case 3: 
            resultado.mesExtenso = 'Março'
            break;

        case 4: 
            resultado.mesExtenso = 'Abril'
            break;

        case 5: 
            resultado.mesExtenso = 'Maio'
            break;

        case 6: 
            resultado.mesExtenso = 'Junho'
            break;

        case 7: 
            resultado.mesExtenso = 'Julho'
            break;

        case 8: 
            resultado.mesExtenso = 'Agosto'
            break;

        case 9: 
            resultado.mesExtenso = 'Setembro'
            break;

        case 10: 
            resultado.mesExtenso = 'Outubro'
            break;

        case 11: 
            resultado.mesExtenso = 'Novembro'
            break;

        case 12: 
            resultado.mesExtenso = 'Dezembro'
            break;
    }

    let campoResultado = document.getElementById('campoResultado')

    campoResultado.innerHTML = `
    <p>Dia: ${resultado.dia}</p>
    <p>Mês: ${resultado.mes}</p>
    <p>Ano: ${resultado.ano}</p>
    <p>Dia da semana: ${resultado.diaSemana}</p>
    <p>Mês por extenso: ${resultado.mesExtenso}</p>
    <p>Milissegundo: ${resultado.milissegundo}</p>
    `
}

let btn = document.getElementById('btn')
btn.addEventListener('click', transformar)