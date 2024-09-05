import OutsideClick from './outsideclick.js';

function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');

    // Cria uma instância da classe OutsideClick passando os parâmetros necessários
    const outsideClickInstance = new OutsideClick(menuList, eventos, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });

    // Inicia o processo de escuta de cliques fora do elemento
    outsideClickInstance.init();
  }

  if (menuButton) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}

export default initMenuMobile();
