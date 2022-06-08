function descoberta() {

    let valor = Number(document.getElementById('valor').value.replace(',', '.'))
    
    let resultadoa = document.getElementById('rMenor')
    let resultadob = document.getElementById('rMaior') 

    if (isNaN(valor)) {
        alert('insira somente números reais!')
    }

    resultadoa.innerHTML = Math.floor(valor)
    resultadob.innerHTML = Math.ceil(valor)
}

let btn = document.getElementById('btn')
btn.addEventListener('click', descoberta)
