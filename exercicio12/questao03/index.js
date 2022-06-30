const btn = document.getElementById('btn')

function valuePi() {
    let p = 10n ** 100n
    let pi = 3n*p
    let signal = 1n

    for (let i = 1n; i <= 10020n; i++) {
        signal = i % 2n == 0 ? -1n : 1n

        pi += signal*(4n*p/((i * 2n)*(i * 2n + 1n)*(i * 2n + 2n)))
    }

    const value = pi.toString() 

    console.log(`${value[0]},${value.slice(1)}`)
}

btn.addEventListener('click', valuePi)