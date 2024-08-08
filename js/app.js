import Scrollsuave from "./modules/scroll-suave.js";
import initScrollAnimation from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordionlist.js";
import initTab from "./modules/tab.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDown from "./modules/dropdownMenu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAinimas from "./modules/fetch-anamais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

// Initialize the modules

const scrollSuave = new Scrollsuave('[data-menu-"suave"] ah[href^="#]');

scrollSuave.init();
initScrollAnimation();
initAccordion();
initTab();
initModal();
initToolTip();
initDropDown();
initMenuMobile();
initFuncionamento();
initFetchAinimas();
initFetchBitcoin();
