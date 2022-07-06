export default () => {
    const conteiner = document.createElement('section');
    const content = `
        <h1>Cotação de Moedas - API</h1>
        <select name="coin" id="coin"></select>

        <div id="inDates">
            <p>De</p>
            <input type="date" name="dInitial" id="dInitial">
            <p>até</p>
            <input type="date" name="dEnd" id="dEnd">
        </div>

        <button type="button" id="convert">Converter</button>

        <div id="result"></div>
    `;

    conteiner.innerHTML = content
    return conteiner
};