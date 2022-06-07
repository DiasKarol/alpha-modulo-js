const btn = document.getElementById('btn');

function calculo() {
    let first = Number(document.getElementById('operando1').value);
    let second = Number(document.getElementById('operando2').value);
    let options = document.getElementById('options').value;
    
    let result = document.getElementById('result');
    
    let answer;

    switch (options) {
        case 'plus':
            answer = first + second;
            break;

        case 'less':
            answer = first - second;
            break;

        case 'times':
            answer = first * second;
            break;

        case 'slice':
            answer = first / second;
            break;
    }

    result.innerHTML = answer;
    console.log(answer);
}

btn.addEventListener('click', calculo);