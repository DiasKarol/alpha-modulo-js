function comparar() {

    let result = document.getElementById("result")
    let num1 = Number(document.getElementById("first").value) /* Number() converte o elemento em numero / value pega o valor */
    let num2 = Number(document.getElementById("second").value)

    if (num1 > num2) {
        result.innerHTML = `O número ${num1} é maior que o número ${num2}` /* concatenar, juntar o texto e o valor informado pelo usuário */
    } else if (num1 < num2) {
        result.innerHTML = `O número ${num1} é menor que o número ${num2}`
    } else {
        result.innerHTML = `O número ${num1} é igual ao número ${num2}`
    }

}

document.getElementById("btn").addEventListener("click", comparar)
