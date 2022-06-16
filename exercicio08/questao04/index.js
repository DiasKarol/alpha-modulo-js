const btn = document.getElementById('btn')

function convert() {

    try {
        let inserting = document.getElementById('insert');
        let object =  JSON.parse(inserting.value)
        
        console.log(object);
        alert('Parsable JSON string!')

    } catch (error) {
        alert(`Erro: ${error}`)
    }
}

btn.addEventListener('click', convert)