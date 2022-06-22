const btnAdd = document.getElementById('add')
const btnList = document.getElementById('list')
const btnInsert = document.getElementById('insert')
const btnRefresh = document.getElementById('refresh')
const btnClose = document.getElementById('close')

var products = []

function addProduct() {
    const id = products.length > 0 ? products[products.length - 1].id + 1 : 1
    const name = document.getElementById('name')
    const description = document.getElementById('description')
    const price = document.getElementById('price')
    const date = new Date().getTime()

    try {
        if (name.value.length < 3)
            throw 'O nome do produto precisa de mais de três caracteres'
        if (description.value.length < 3)
            throw 'A descrição do produto precisa de mais de três caracteres'
        if (isNaN(price.value.replace(',', '.')))
            throw 'O preço do produto tem que ser numérico'
    } catch (error) {
        alert(`Falha no cadastro do produto! ${error}`)
        return
    }

    const product = {
        'id': id,
        'nome': name.value,
        'descricao': description.value,
        'valor': price.value,
        'incluidoEm': date
    }

    products.push(product)

    alert(`Produto ${product.nome} incluído com sucesso!`)

    name.value = ''
    description.value = ''
    price.value = ''
}

function creatTable() {
    document.body.classList.add('change')
    const tBody = document.getElementById('tbody')
    tBody.innerHTML = ''
    let i = 0

    while (i < products.length) {
        const line = document.createElement('TR')
        const cellName = document.createElement('TD')
        const cellValue = document.createElement('TD')
        const cellEdit = document.createElement('TD')
        const cellDelete = document.createElement('TD')

        cellName.innerHTML = products[i].nome
        cellValue.innerHTML = `R$ ${products[i].valor}`
        cellEdit.innerHTML = `<span class="material-icons" onclick="editProduct(${i})">edit_note</span>`
        cellDelete.innerHTML = `<span class="material-icons" onclick="deleteProduct(${i})">delete_forever</span>`

        cellName.classList.add('show')
        cellName.setAttribute('onclick', `showDetails(${i})`)

        line.appendChild(cellName)
        line.appendChild(cellValue)
        line.appendChild(cellEdit)
        line.appendChild(cellDelete)

        tBody.appendChild(line)

        i++
    } 
}

function showDetails(i) {
    const article = document.createElement('article')

    let date = new Date(products[i].incluidoEm);

    const pId = document.createElement('p')
    const pNome = document.createElement('p')
    const pDescricao = document.createElement('p')
    const pValor = document.createElement('p')
    const pIncluidoEm = document.createElement('p')
    

    const strongId = document.createElement('strong')
    const strongNome = document.createElement('strong')
    const strongDescricao = document.createElement('strong')
    const strongValor = document.createElement('strong')
    const strongIncluidoEm = document.createElement('strong')

    strongId.innerHTML = 'Id: '
    strongNome.innerHTML = 'Nome: '
    strongDescricao.innerHTML = 'Descrição: '
    strongValor.innerHTML = 'Valor: '
    strongIncluidoEm.innerHTML = 'Incluido em: '

    pId.appendChild(strongId)
    pNome.appendChild(strongNome)
    pDescricao.appendChild(strongDescricao)
    pValor.appendChild(strongValor)
    pIncluidoEm.appendChild(strongIncluidoEm)

    pId.innerHTML += products[i].id
    pNome.innerHTML += products[i].nome
    pDescricao.innerHTML += products[i].descricao
    pValor.innerHTML += products[i].valor
    pIncluidoEm.innerHTML += date.getDate() + '/' + Number(date.getMonth() +1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

    article.innerHTML = `<span class="material-icons" id="closeDetails">clear</span>`

    article.appendChild(pId)
    article.appendChild(pNome)
    article.appendChild(pDescricao)
    article.appendChild(pValor)
    article.appendChild(pIncluidoEm)

    document.body.appendChild(article)

    article.setAttribute('id', 'details')

    const btnCloseDetails = document.getElementById('closeDetails')
    btnCloseDetails.addEventListener('click', () => {
        document.getElementById('details').style.display = 'none'
        document.body.removeChild(article)
    })
}

function editProduct(edPos) {
    document.getElementById('edit').style.display = 'flex'
    const name = document.getElementById('nameEdit')
    const description = document.getElementById('descriptionEdit')
    const price = document.getElementById('priceEdit')

    name.value = products[edPos].nome
    description.value = products[edPos].descricao
    price.value = products[edPos].valor

    btnRefresh.addEventListener('click', () => {
        try {
            if (name.value.length < 3)
                throw 'O nome do produto precisa de mais de três caracteres'
            if (description.value.length < 3)
                throw 'A descrição do produto precisa de mais de três caracteres'
            if (isNaN(price.value.replace(',', '.')))
                throw 'O preço do produto tem que ser numérico'
        } catch (error) {
            alert(`Falha no cadastro do produto! ${error}`)
            return
        }

        products[edPos].nome = name.value
        products[edPos].descricao = description.value
        products[edPos].valor = price.value

        document.getElementById('edit').style.display = 'none'

        creatTable()
    })
}

function deleteProduct(pos) {
    let newProducts = []
    let i = 0

    while (i < products.length) {
        if (i != pos) {
            newProducts.push(products[i])
        }
        i++
    }

    products = newProducts
    creatTable()
}

btnInsert.addEventListener('click', addProduct)
btnList.addEventListener('click', creatTable)
btnAdd.addEventListener('click', () => document.body.classList.remove('change'))
btnClose.addEventListener('click', () => document.getElementById('edit').style.display = 'none')