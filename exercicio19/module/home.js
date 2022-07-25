export default () => {
    const conteiner = document.createElement('section');
    const content = `
        <article id="bingoArticle">
            <div id="firstCard">
                <h2>Cartela A</h2>
            </div>

            <div id="center">
                <h1>Bingo!</h1>
                <button id="start">Iniciar</button>

                <h2 id="sort"></h2>
            </div>
            
            <div id="secondCard">
                <h2>Cartela B</h2>
            </div>
        </article>

        <article id="resultId">
            <p id="result">Números sorteados:</p>
            <div id="listResult"></div>
        </article>
    `;

    conteiner.innerHTML = content;
    return conteiner;
};