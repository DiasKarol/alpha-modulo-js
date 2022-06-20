const btn = document.getElementById('btn');

function sum(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2)) throw 'sum'
        if (num1 < 0 || num2 < 0) throw 'sum'
        if (Number(num1) != parseInt(num1) || Number(num2) != parseInt(num2) ) throw 'sum'
    } catch (error) {
        alert(`Impossible to ${error} ${num1} + ${num2}`)
        return null
    }

    if (num2 == 0){
        return num1
    } else {
        return sum(num1 ^ num2, (num1 & num2) << 1)
    }
}

function subtract(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2)) throw 'subtract'
        if (num1 < 0 || num2 < 0) throw 'subtract'
        if (Number(num1) != parseInt(num1) || Number(num2) != parseInt(num2) ) throw 'subtract'
        if (Number(num1) <= Number(num2)) throw 'subtract'
    } catch (error) {
        alert(`Impossible to ${error} ${num1} - ${num2}`)
        return null
    }

    if (num2 == 0){
        return num1
    } else {
        return subtract(num1^num2, ((~num1) & num2) << 1);
    }
}

function multiply(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2)) throw 'multiply'
        if (num1 < 0 || num2 < 0) throw 'multiply'
        if (Number(num1) != parseInt(num1) || Number(num2) != parseInt(num2) ) throw 'multiply'
    } catch (error) {
        alert(`Impossible to ${error} ${num1} x ${num2}`)
        return null
    }

    if (num2 == 0) {
        return 0
    }
    if (num2 == 1) {
        return num1
    } else {
        return sum(num1, multiply(num1, subtract(num2, 1)))
    }
}

function calculo() {
    let num1 = document.getElementById('operando1').value;
    let num2 = document.getElementById('operando2').value;
    let options = document.getElementById('options').value;
    let result = document.getElementById('result');
    let answer;

    switch (options) {

        case 'times':
            answer = multiply(num1, num2);
            break;

        case 'plus':
            answer = sum(num1, num2)
            break;

        case 'less':
            answer = subtract(num1, num2);
            break;
    }

    result.innerHTML = answer;
    console.log(answer);
}

btn.addEventListener('click', calculo);