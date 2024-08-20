class Modal {
  constructor(open, close, modal) {
    this.botaoAbrir = document.querySelector(open);
    this.botaoFechar = document.querySelector(close);
    this.containerModal = document.querySelector(modal);

    /* bind this ap callback para 
    fazer referência ao objeto da classe */
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clicouForaModal = this.clicouForaModal.bind(this);
    this.init();
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clicouForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addEventsModal() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clicouForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventsModal();
    }
    return this;
  }
}

export default Modal;
