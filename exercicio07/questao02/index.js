var cep = document.getElementById('cep')
var validaCep = ''

cep.addEventListener('keydown', function(event) {
    if (event.key == 'Backspace') {
        if (validaCep[validaCep.length-1] == '-') {
            validaCep = validaCep.slice(0, validaCep.length - 2)
        } else {
            validaCep = validaCep.slice(0, validaCep.length - 1)
        }
    }

    cep.value = validaCep
})

cep.addEventListener('keyup', function(event) {
    if (validaCep.length <= 8 && event.key != 'Backspace') {
        
        //a '!' na função troca o valor logico, se for true passa a ser false e vice-versa 
        if (!isNaN(event.key) && event.key != ' '){
            validaCep += event.key
        }

        if (validaCep.length == 5) {
            validaCep += '-'
        }
    }

    cep.value = validaCep
})