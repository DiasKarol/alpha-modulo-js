export default () => {
    const conteiner = document.createElement('section');

    const conteudo = `
    <img src="./modules/imagens/doces.jpg" alt="imagens de varios donuts bem coloridos">
    <div>
        <h2>Doces</h2>
        <p>Que o seu dia seja doce como o algodão, alegre como um parque de diversão e com o sabor que pede o seu coração!</p>
        <p>Temos os mais diversos doces, entre em contato para saber mais sobre o doce que seu coração esta pedindo!</p>
        <p>Nosso telefone: <b>(21) 9-9999-9999</b></p>
        <p>Atendemos toda a região!</p>
    </div>
    `;

    conteiner.innerHTML = conteudo;
    return conteiner;
}