var btnSend = document.getElementById('send')
var btnClean = document.getElementById('clean')
var talk = document.getElementById('talk')

function communication() {
    let preview = document.getElementById('preview')

    preview.value += talk.value + '\n' //'\n' é igual ao <br>
    preview.scrollTop = 0;

    talk.value = ''
}

function clear() {
    let preview = document.getElementById('preview')

    preview.value = ''
}

btnSend.addEventListener('click', communication)
btnClean.addEventListener('click', clear)

talk.addEventListener("keydown", function(event) { //Ao inves de chamar uma function, eu criei uma função anônima / o 'event' faz referencia ao keydown   
    if (event.key === "Enter") { //Verificando se a tecla pressionada é o 'enter'
        communication()
    }
});