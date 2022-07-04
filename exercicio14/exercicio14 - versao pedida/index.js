import inicial from "./modules/js/inicial.js";
import brigadeiro from "./modules/js/brigadeiro.js";
import cupcakes from "./modules/js/cupcakes.js";
import doces from "./modules/js/doces.js";

const btnInicial = document.getElementById('inicial');
const btnBrigadeiro = document.getElementById('brigadeiros');
const btnCupcakes = document.getElementById('cupcake');
const btnDoces = document.getElementById('doces');

const main = document.getElementById('raiz');
const renderiza = new CustomEvent ( 'onstatechange', {detail: {name: location.pathaname}});

main.appendChild(inicial());

function rota() {
    switch (renderiza.detail.name) {
        case '/inicial':
            main.innerHTML = ''
            main.appendChild(inicial());
            break;

        case '/brigadeiro':
            main.innerHTML = ''
            main.appendChild(brigadeiro());
            break;
        
        case '/cupcakes':
            main.innerHTML = ''
            main.appendChild(cupcakes());
            break;

        case '/doces':
            main.innerHTML = ''
            main.appendChild(doces());
            break;

        default:
            `Página não encontrada`;
    };
};

window.addEventListener('onstatechange', rota);


window.addEventListener('load', () => {
    switch (renderiza.detail.name) {
        case '/inicial':
            main.innerHTML = ''
            main.appendChild(inicial());
            break;

        case '/brigadeiro':
            main.innerHTML = ''
            main.appendChild(brigadeiro());
            break;
        
        case '/cupcakes':
            main.innerHTML = ''
            main.appendChild(cupcakes());
            break;

        case '/doces':
            main.innerHTML = ''
            main.appendChild(doces());
            break;

        default:
            `Página não encontrada`;
    };
}); 


/* Atribuindo as funções aos botões */
btnInicial.addEventListener('click', () => {
    history.pushState('', '', 'inicial');
    renderiza.detail.name = location.pathname;
    window.dispatchEvent(renderiza);
    rota();
});

btnBrigadeiro.addEventListener('click', () => {
    history.pushState('', '', 'brigadeiro');
    renderiza.detail.name = location.pathname;
    window.dispatchEvent(renderiza);
    rota();
});

btnCupcakes.addEventListener('click', () => {
    history.pushState('', '', 'cupcakes');
    renderiza.detail.name = location.pathname;
    window.dispatchEvent(renderiza);
    rota();
});

btnDoces.addEventListener('click', () => {
    history.pushState('', '', 'doces');
    renderiza.detail.name = location.pathname;
    window.dispatchEvent(renderiza);
    rota();
});