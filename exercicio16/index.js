import home from "./module/home.js";
import cep from "./module/cep.js";
import cepBtn from "./module/cep_btn.js";

const main = document.getElementById('root');
    
window.addEventListener('load', () => {
    main.appendChild(home());

    cep();
    cepBtn();
});

