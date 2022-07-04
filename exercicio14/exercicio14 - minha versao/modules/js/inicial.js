export default () => {
    const conteiner = document.createElement('section');

    const conteudo = `
    <img src="./modules/imagens/capa.jpg" alt="Imagem com itens para fazer doces, chocolate e o nome da empresa">
    <div>
        <h2>Nossa doceria</h2>
        <p>A SPA.JS oferece uma experiência única para você! Aqui você escolhe o doce que deseja, para a ocasião que estiver por vir ou para a ocasião que ainda esta sendo planejada. Aqui, você personaliza a sua encomenda do seu jeito!</p>
    </div>
    `;

    conteiner.innerHTML = conteudo;

    return conteiner;
};