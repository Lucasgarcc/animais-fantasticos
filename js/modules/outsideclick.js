// trata eventos de click fora do elemento menu sobre Em resumo, a função outsideClick é usada para criar um comportamento que fecha o menu dropdown quando o usuário clica fora dele. Ela é uma parte importante para garantir que o menu seja fechado corretamente quando necessário.

// na linha 12: Alternativa sem setTimeout: Uma alternativa é usar o evento DOMContentLoaded para garantir que o código seja executado somente após o carregamento completo do DOM. Por exemplo: JavaScript document.addEventListener('DOMContentLoaded', () => { });

class OutsideClick {
  constructor(element, events, callback) {
    this.element = element;
    this.events = events;
    this.callback = callback;

    // Bind o método para garantir que `this` funcione corretamente
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.html = document.documentElement;
    this.outside = 'data-outside';
  }

  handleOutsideClick(event) {
    // Verifica se o clique foi fora do elemento
    if (!this.element.contains(event.target)) {
      this.element.removeAttribute(this.outside);
      this.events.forEach((userEvent) => {
        this.html.removeEventListener(userEvent, this.handleOutsideClick);
      });
      this.callback(); // Executa a callback
    }
  }

  init() {
    // Verifica se o elemento ainda não está marcado como "outside"
    if (!this.element.hasAttribute(this.outside)) {
      this.events.forEach((userEvent) => {
        setTimeout(() => {
          this.html.addEventListener(userEvent, this.handleOutsideClick);
        });
      });
      this.element.setAttribute(this.outside, '');
    }
  }
}

export default OutsideClick;
