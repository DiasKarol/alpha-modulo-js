export default () => {
    var cep = document.getElementById('cep');
    var validationCep = ''
    const btnConsult = document.getElementById('consult');

    cep.addEventListener('keydown', function(event) {
        if (event.key == 'Backspace') {
            if (validationCep[validationCep.length-1] == '-') {
                validationCep = validationCep.slice(0, validationCep.length - 2);
            } else {
                validationCep = validationCep.slice(0, validationCep.length - 1);
            }
            btnConsult.disabled = true;
        }
        cep.value = validationCep
    })

    cep.addEventListener('keyup', function(event) {
        if (validationCep.length <= 8 && event.key != 'Backspace') {
            //a '!' na função troca o valor logico, se for true passa a ser false e vice-versa 
            if (!isNaN(event.key) && event.key != ' '){
                validationCep += event.key
            }
            if (validationCep.length == 5) {
                validationCep += '-'
            }
            btnConsult.disabled = true;
        }
        if (validationCep.length == 9) {
            btnConsult.disabled = false;
        }
        cep.value = validationCep
    })    
}