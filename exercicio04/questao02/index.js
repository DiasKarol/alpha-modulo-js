function sortear() {

    let valormin = Number(document.getElementById('minimo').value)
    let valormax = Number(document.getElementById('maximo').value)

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    if (isNaN(valormin) || isNaN(valormax)){ /* verificando se é número */
        alert('Insira somente números inteiros')
        return
    }

    if ((valormin != parseInt(valormin)) || (valormax != parseInt(valormax))) { /* verificando se os valores inseridos são inteiros */
        alert('Insira somente números inteiros')
        return
    }

    if (valormax <= valormin) { 
        alert('O valor máximo tem que ser maior que o valor mínimo')
        return
    }

    resultado.innerHTML = parseInt(Math.random() * (valormax - valormin) + valormin)
}

let btn = document.getElementById('btn')
btn.addEventListener('click', sortear)