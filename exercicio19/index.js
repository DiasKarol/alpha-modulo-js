import home from "./module/home.js";
import cardBingo from "./module/cardBingo.js";
import sortBingo from "./module/sortBingo.js";

const main = document.getElementById('root');
    
window.addEventListener('load', () => {
    main.appendChild(home());

    cardBingo();
    sortBingo();
});

