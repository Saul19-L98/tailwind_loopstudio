//Styles
import './style.css';

//Desktop
import './assets/images/desktop/image-hero.jpg';


//Mobile
import './assets/images/mobile/image-hero-m.jpg';

//Icons
import './assets/images/icon-close.svg';
import './assets/images/icon-hamburger.svg';

//Modules;
import { templateView } from './modules/htmlTemplate';
import {addPageLogo} from './modules/Logopage';

(function init(){
    const main = document.querySelector('body');
    main.innerHTML = templateView();
    
    const btn = document.querySelector('#menu-btn');
    const menu = document.querySelector('#menu');

    addPageLogo();

    function navToggle () {
        btn.classList.toggle('open');
        menu.classList.toggle('hidden');
    }

    btn.addEventListener('click',navToggle);
})();
