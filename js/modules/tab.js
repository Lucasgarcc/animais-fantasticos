// selecionando a secction e addicionando a class no data-anime
// index % 2 === 0 ? (index += 1) : (div.dataset.anime = "show-down")

class Tab {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.section = document.querySelectorAll('#animais section');
    this.activeClass = 'ativo';
    this.init();
  }

  // ativa a tab de acordo com o index dela
  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    const animacaoTab = this.tabContent[index].dataset.anima;
    this.tabContent[index].classList.add(this.activeClass, animacaoTab);
  }

  tabSection() {
    this.section.forEach((div, index) => {
      if (index % 2 === 0) {
        index += 1;
      } else {
        div.dataset.anime = 'show-down';
      }
      div.classList.add(div.dataset.anime);
    });
  }

  // adicona os eventos nas tabs
  addTabEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    // adciona o evento de animção right e down a section de cada animal
    this.tabSection();
    if (this.tabMenu.length && this.tabContent.length) {
      this.tabContent[0].classList.add(this.activeClass);
      // previne e deixa item ativo
      this.addTabEvent();
    }
  }
}
export default Tab;
