import OutsideClick from './outsideclick.js';

class MenuMobile {
  constructor(menubutton, menulist, eventos) {
    this.menuButton = document.querySelector(menubutton);
    this.menuList = document.querySelector(menulist);

    // Define eventos com valor padrão caso não sejam fornecidos
    if (eventos === undefined) this.eventos = ['click', 'touchstart'];

    this.active = 'active';
    this.openMenu = this.openMenu.bind(this);

    this.init(); // Mantém a chamada de init
  }

  openMenu() {
    this.menuList.classList.add(this.active);
    this.menuButton.classList.add(this.active);

    // Cria uma instância da classe OutsideClick passando os parâmetros necessários
    const outsideClickInstance = new OutsideClick(
      this.menuList,
      this.eventos,
      () => {
        this.menuList.classList.remove(this.active);
        this.menuButton.classList.remove(this.active);
      },
    );
    // Inicia o processo de escuta de cliques fora do elemento
    outsideClickInstance.init();
  }

  addMenuMobileEvent() {
    this.eventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}

export default MenuMobile;
