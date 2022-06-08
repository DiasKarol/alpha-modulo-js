function calcular() {

    const peso = Number(document.getElementById('peso').value.replace(',', '.'))
    const altura = Number(document.getElementById('altura').value.replace(',', '.'))

    const imc = peso / (altura * altura)

    const resposta = document.getElementById('resultado')
    resposta.innerHTML = ''

    if (isNaN(peso) || isNaN(altura)) {
        alert('O valor inserido não é um número')
        return 
    }

    if (18.5 >= imc) {
        resposta.innerHTML = `Seu IMC é de ${imc} e você está Abaixo do seu peso normal`
    } else if (24.9 >= imc ) {
        resposta.innerHTML = `Seu IMC é de ${imc} e você está no seu peso normal`
    } else if (29.9 >= imc) {
        resposta.innerHTML = `Seu IMC é de ${imc} e você está acima do seu peso normal`
    } else {
        resposta.innerHTML = `Seu IMC é de ${imc} e você está com obesidade`
    }


    console.log(imc)
}

document.getElementById('btn').addEventListener('click', calcular)