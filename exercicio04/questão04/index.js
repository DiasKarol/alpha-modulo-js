function clicar(e) {

    e.preventDefault();

    const resultado = document.getElementById('resposta');
    const numero = Math.random() * (100);
    console.log(numero.toFixed(1));

    if(numero.toFixed(1) < 8.6 && numero.toFixed(1) >= 0) {
        resultado.innerHTML = `Você é uma senhora`;
    } else if (numero.toFixed(1) >= 8.6 && numero.toFixed(1) < 16.7) {
        resultado.innerHTML = `Você é um senhor`;
    } else if (numero.toFixed(1) >= 16.7 && numero.toFixed(1) < 56.9) {
        resultado.innerHTML = `Você é uma mulher jovem`;
    } else {
        resultado.innerHTML = `Você é um homem jovem`;
    }    
}

const button = document.getElementById('btn');
button.addEventListener('click', (e) => clicar(e));


// M = 51.7% H = 48.3% 16.7% são idosos -> 
// mulheres jovens = 43.0661% homens jovens = 40.2339%, 8.0661% de idosos homens e 8.6339% de mulheres