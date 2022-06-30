const btn = document.getElementById('btn')

function factorial(num) {
    let result = 1

    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

function eulerNumber() {
    const number = document.getElementById('number')
    const showResult = document.getElementById('result')
    let result = 0

    try {
        if (isNaN(number.value)) throw error
        if (number.value == '') throw error
    } catch (error) {
        alert('O valor a ser informado deve ser número')
        return
    }

    for (let i = 0; i <= number.value; i++) {
        result += 1/factorial(i) 
    }

    showResult.innerHTML = result
    console.log(result)
}

btn.addEventListener('click', eulerNumber)