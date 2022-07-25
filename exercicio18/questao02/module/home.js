export default () => {
    const conteiner = document.createElement('section')

    const content = `
    <section id="conteinerDeckOfCards">
        <img src="./module/img/pngwing.com.png" id="deck" data-id alt="Carta de baralho virada para baixo">
    </section>

    <section id="result"></section>
    `

    conteiner.innerHTML = content
    return conteiner
}
