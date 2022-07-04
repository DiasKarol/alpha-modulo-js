export default () => {
    const conteiner = document.createElement('section');

    const conteudo = `
    <img id="imgBrigadeiro" src="./modules/imagens/brigadeiro.jpg" alt="Diversos brigadeiros">
    <div id="divBrigadeiro">
        <h2>Brigadeiros</h2>
        <p>Não existe nada mais delicioso do que se jogar no sofá para assistir aquele filminho ou maratonar aquela série favorita comendo um docinho caseiro! que tal diversificar esse sabor caseiro? Aqui você encontra diversos sabores e nossos precinhos estão mais que especiais!</p>
        <p>Se eu fosse você não perdia essa delícia, fale com a gente agora!</p>
        <p>Atendemos toda a região!</p>
    </div>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
}