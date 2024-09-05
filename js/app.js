import Scrollsuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-animacao.js';
import Accordioon from './modules/accordionlist.js';
import TabNav from './modules/tab.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropDownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAinimas from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const dropdownMenu = new DropDownMenu('[data-dropdown]');

const scrollAnima = new ScrollAnima('[data-anima="scroll"]');

const tooltip = new ToolTip('[data-tooltip]');

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);

const accordiion = new Accordioon('[data-anima="accordion"] dt');
const scrollSuave = new Scrollsuave('[data-menu-"suave"] ah[href^="#]');

scrollSuave.init();
accordiion.init();
tabNav.init();
modal.init();
tooltip.init();
scrollAnima.init();
dropdownMenu.init();

initMenuMobile();
initFuncionamento();
initFetchAinimas();
initFetchBitcoin();
