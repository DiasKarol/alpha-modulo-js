function transformar() {

    let valor = Number(document.getElementById('valor').value.replace('.', ','))
    
    let resultado = document.getElementById('resultado') 

    if (isNaN(valor)) {
        alert('insira somente números inteiros!')
    }

    switch (valor) {
        case 0: 
            resultado.innerHTML = 'Zero'
            break;

        case 1: 
            resultado.innerHTML = 'Um'
            break;

        case 2: 
            resultado.innerHTML = 'Dois'
            break;

        case 3: 
            resultado.innerHTML = 'Três'
            break;

        case 4: 
            resultado.innerHTML = 'Quatro'
            break;

        case 5: 
            resultado.innerHTML = 'Cinco'
            break;

        case 6: 
            resultado.innerHTML = 'Seis'
            break;

        case 7: 
            resultado.innerHTML = 'Sete'
            break;

        case 8: 
            resultado.innerHTML = 'Oito'
            break;

        case 9: 
            resultado.innerHTML = 'Nove'
            break;

        case 10: 
            resultado.innerHTML = 'Dez'
            break;

        default:
            alert('Por favor, escolha um número de 0 a 10')

    }
}

let btn = document.getElementById('btn')
btn.addEventListener('click', transformar)
