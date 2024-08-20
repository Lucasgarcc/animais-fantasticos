class ToolTip {
  constructor(tooltips) {
    this.Tooltips = document.querySelectorAll(tooltips);

    //  bind do objetos aos callbacks eventos
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);

    this.init();
  }

  // Update the tooltipbox - atualiza o callback onMouseOver
  // Move a tooltip com base nos styles
  onMouseMove(event) {
    this.tooltipbox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipbox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipbox.style.left = `${event.pageX + 20}px`;
    }
  }

  // onMouseleave como Object que remove a callback
  onMouseLeave({ currentTarget }) {
    this.tooltipbox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // criando a caixa box de texto da tooltip que mostrara quando passar o mouse
  boxToolTip(e) {
    const tooltipbox = document.createElement('div');
    const text = e.getAttribute('aria-label');
    tooltipbox.classList.add('tooltip');
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);
    this.tooltipbox = tooltipbox;
  }

  onMouseOver({ currentTarget }) {
    // cria a tooltip box e coloca em um proriedade boxTooTip()
    this.boxToolTip(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addToolTipsEvent() {
    this.Tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.Tooltips.length) {
      this.addToolTipsEvent();
      console.log('init');
    }
    return this;
  }
}

export default ToolTip;
