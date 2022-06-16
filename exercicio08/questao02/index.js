
const btn = document.getElementById('btn')


function isNaDay(d) {
    if (!isNaN(d)) {
        if (Number(d) >= 1 && Number(d) <= 31) {
            return false
        }
    } 
    return true
}

function isNaMonth(m) {
    if (!isNaN(m)) {
        if (Number(m) >= 1 && Number(m) <= 12) {
            return false 
        }
    }
    return true
}

function isNaYear(y) {
    if (!isNaN(y) && y != '' && y != ' ') {
        if (Number(y) >= 0 && Number(y) <= 2022) {
            return false
        }
    }
    return true
}

function isNaWeigth(w) {
    if (!isNaN(w) && w != '' && w != ' ') {
        return false
    }
    return true
}

function isNaHeigth(h) {
    if (!isNaN(h) && h != '' && h != ' ') {
        if (Number(h) == parseInt(h)) {
            return false
        }
    }
    return true
}



function keep() {
    let name = document.getElementById('name')
    let day = document.getElementById('day')
    let month = document.getElementById('month')
    let year = document.getElementById('year')
    let gender = document.getElementById('gender')
    let weigth = document.getElementById('weigth')
    let heigth = document.getElementById('heigth')
    let error = false

    name.classList.remove('invalid')
    day.classList.remove('invalid')
    month.classList.remove('invalid')
    year.classList.remove('invalid')
    weigth.classList.remove('invalid')
    heigth.classList.remove('invalid')
    gender.classList.remove('invalid')

    

    if (name.value == '' || name.value.length < 5) {
        error = true
        name.classList.add('invalid') 
    }

    if (isNaDay(day.value)) {
        error = true
        day.value = ''
        day.classList.add('invalid')
    }

    if (isNaMonth(month.value)) {
        error = true
        month.value = ''
        month.classList.add('invalid')
    }

    if (isNaYear(year.value)) {
        error = true
        year.value = ''
        year.classList.add('invalid')
    }

    if (gender.value == '') {
        error = true
        gender.classList.add('invalid')
    }

    if (isNaWeigth(weigth.value.replace(',','.'))) {
        error = true
        weigth.classList.add('invalid')
    } 

    if (isNaHeigth(heigth.value)) {
        error = true
        heigth.classList.add('invalid')
    }

    let birthDay = new Date(year.value + '-' + month.value + '-' + day.value) 
    let today = new Date()

    if (birthDay > today || day.value != birthDay.getDate()) {
        day.value = ''
        month.value = ''
        year.value = ''
        day.classList.add('invalid')
        month.classList.add('invalid')
        year.classList.add('invalid')
    }

    try {
        if (name.value == '' || name.value.length < 5) throw 'name';
        if (birthDay > today || day.value != birthDay.getDate()) throw 'birthDate';
        if (gender.value == '') throw 'gender';
        if (isNaN(weigth.value.replace(',','.'))) throw 'weight';
        if (isNaN(heigth.value) || Number(heigth.value) != parseInt(heigth.value)) throw 'height';
    } catch(error) {
        console.log(`Field "${error}" is invalid!`);
    }

    let user = {
        'name': name.value,
        'birthDate': birthDay,
        'weight': parseFloat(weigth.value.replace(',','.')),
        'height': parseInt(heigth.value),
        'gender': gender.value
    }

    console.log(user)
}

btn.addEventListener('click', keep)