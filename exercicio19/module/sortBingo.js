export default () => {
    const btnStart = document.getElementById('start')

    function bingo() {
        let numbers = []
        let sorted = []
        const NumberSort = document.getElementById('sort')
        const listResult = document.getElementById('listResult')
        const cardA = document.getElementById('firstCard')
        const cardB = document.getElementById('secondCard')

        function creatNumbers() {
            for (let i = 1; i <= 75; i++) {
                numbers.push(i)
            }
        }

        function rdnNumber(min, max) {
            return parseInt(Math.random() * (max - min) + min)
        }

        function sortNumbers() {
            if (cardA.dataset.bingo == 10 || cardB.dataset.bingo == 10 || numbers.length == 0) {
                clearInterval(time)
                return
            }

            let sort = rdnNumber(0, numbers.length)
            sorted.push(numbers[sort])
            listResult.dataset.sorted = '[' + sorted + ']'

            NumberSort.innerHTML = numbers[sort]
            listResult.innerHTML += numbers[sort] + ', '

            numbers.splice(sort, 1)
        }
        
        creatNumbers()
        let time = setInterval(sortNumbers, 5000)
    }

    btnStart.addEventListener('click', bingo)
}