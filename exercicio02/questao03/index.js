function morte() {
    let hoje = new Date()
    let dia = Number(document.getElementById("dia").value)
    let mes = Number(document.getElementById("mes").value)
    let ano = Number(document.getElementById("ano").value)
    let woman = document.getElementById("woman")
    let man = document.getElementById("man")

    let diasTotais 

    if (woman.checked) {
        diasTotais = 365.25 * 80.1 
    }

    if (man.checked) {
        diasTotais = 365.25 * 73.1
    }

    let diasVividos = 365.25 * (hoje.getFullYear() - ano) + 30 * (hoje.getMonth() + 1 - mes) + (hoje.getDate() - dia)

    document.getElementById("result").innerHTML = parseInt(diasTotais - diasVividos) + " dias."
}

document.getElementById("btn").addEventListener("click", morte)