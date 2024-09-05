import outsideClick from './outsideclick.js';

class DropDownMenu {
  constructor(dropdownMenu, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenu);

    /* define touchstart e click como argumento padrão 
    de events caso o usuário não defina */

    if (events === undefined) this.events = ['touchstart', 'click'];
    this.active = 'active';
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Ativa o dropdown menu e adiciona;
  // a função que observa o click fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.active);
    element.classList.remove(this.active);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.active);
    });
  }

  // touchstart serve para mobile

  // usando o ['touchstart', 'click'] forEach encadeado para se otimizar e usar duas function callbacks.

  addDropdownMenuEvent() {
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenu.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}

export default DropDownMenu;
