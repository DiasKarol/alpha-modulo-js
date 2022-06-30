const btn = document.getElementById('btn')

function checkPrime(num) {
    for (let i = 2 ; i < num; i++)  {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

function primeNumbers() {
    const prime = [];
    
    for (let i = 0; i <= 100000; i++) {
        if (checkPrime(i)) {
            prime.push(i);
        }
    }

    console.log(prime);
}

btn.addEventListener('click', primeNumbers)