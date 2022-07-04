export default () => {
    const conteiner = document.createElement('section');

    const conteudo = `    
    <img src="./modules/imagens/cupcake.jpg" alt="um mini bolo com cobertura contendo uns pedacinhos de biscoito misturado e meio biscoito oreo">
    <div>
        <h2>Cupcakes</h2>
        <p>Parece que eles vieram mesmo para ficar. Os cupcakes conquistaram seu espaço em muitas mesas brasileiras de doces. E aqui na SPA.JS não é diferente! esse bolinho individual é otimo para comemorar datas importantes, mas também é uma maravilha para se deliciar em quelquer dia da semana. E para atender a todos os gostos, nossa variedade de sabores é de deixar agua na boca, venha conferir!</p>
        <p>Atendemos toda a região!</p>
    </div>
    `;

    conteiner.innerHTML = conteudo;
    return conteiner;
}