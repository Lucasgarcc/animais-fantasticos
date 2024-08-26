// ANIMAÇÃO AO SCROLL

class initScrollAnima {
  // variavel pega valor do window html atraves da prorpriedade
  // innerHeight multiplicado por 60% da tela.

  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowTela = window.innerHeight * 0.6;
    this.classActive = 'ativo';
    this.checkDistance = this.checkDistance.bind(this);

    this.init();
  }

  // Pega valor de cada item section em relação ao topo do site.
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowTela),
      };
    });
  }

  // Verifica a distância em cada objeto em relação ao scroll do site.
  checkDistance() {
    console.log(window.scrollY);
    this.distance.forEach((section) => {
      if (window.scrollY >= section.offset) {
        section.element.classList.add(this.classActive);
      } else if (section.element.classList.contains(this.classActive)) {
        section.element.classList.remove(this.classActive);
      }
    });
  }

  init() {
    if (this.sections) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove evento do scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}

export default initScrollAnima;
