import inicial from "./modules/js/inicial.js";
import brigadeiro from "./modules/js/brigadeiro.js";
import cupcakes from "./modules/js/cupcakes.js";
import doces from "./modules/js/doces.js";

const main = document.getElementById('raiz');

/* function rota(name) {

    if (location.pathname === `./modules/js/${name}`) {
        main.innerHTML = iniciar(i);
        
    }
} */

/* const renderiza = new customEvent ( 'onstatechange', {detail: {name: location.pathaname}}); */

function escolhaPags() {
    
    switch (window.location.hash) {
        case '':
        main.appendChild(inicial());
        history.pushState('', '', 'inicial');/* 
        rota('inicial'); */
        break;

        case '#brigadeiro':
            main.appendChild(brigadeiro());
           /*  history.pushState('', '', 'brigadeiro'); */
            /* rota('brigadeiro'); */
            break;

        case '#cupcakes':
            main.appendChild(cupcakes());
            history.pushState('', '', 'cupcakes');
            /* rota('cupcakes'); */
            break;

        case '#doces':
            main.appendChild(doces());
            history.pushState('', '', 'doces');
            /* rota('doces'); */
            break;

        default:
            `Página não encontrada`;
    }
}

function iniciar() {
    window.addEventListener('hashchange', () => {
        main.innerHTML = ''
        escolhaPags();
    })
}

window.addEventListener('load', () => {
    iniciar();
    escolhaPags();
});