export default () => {
    const conteiner = document.createElement('section');
    const content = `
        <article id="includeCep">
            <h1>Insira um CEP para consulta</h1>
            <input type="text" id="cep" required>
            <button type="button" id="consult" disabled>Consultar</button>
        </article>

        <article id="resultCep">
            <div id="result"></div>
            <button type="button" id="map" style="display: none;">Exibir mapa</button>
        </article>
    `;

    conteiner.innerHTML = content;
    return conteiner;
};