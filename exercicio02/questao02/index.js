function comparando(){

    let ltr1 = document.getElementById('first').value
    let ltr2 = document.getElementById('second').value
    let resultado = document.getElementById('result')

    /* o operador ternario é montado da seguinte forma: condition ? expr1 : expr2 */
    resultado.innerHTML = ltr1.length > ltr2.length 
        ? "A palavra " + ltr1 + " é maior que a palavra " + ltr2 
        : ltr1.length < ltr2.length 
            ? "A palavra " + ltr1 + " é menor que a palavra " + ltr2 
            : "A palavra " + ltr1 + " é igual que a palavra " + ltr2 
}

document.getElementById('btn').addEventListener('click', comparando)