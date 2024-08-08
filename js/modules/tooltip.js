function initToolTip() {
  const Tooltips = document.querySelectorAll("[data-tooltip]");

  // criando a caixa box de texto da tooltip que mostrara quando passar o mouse
  function boxToolTip(e) {
    const tooltipbox = document.createElement("div");
    const text = e.getAttribute("aria-label");
    tooltipbox.classList.add("tooltip");
    tooltipbox.innerText = text;
    // add no final do document html DICA.
    document.body.appendChild(tooltipbox);
    return tooltipbox;
  }

  // Update the tooltipbox - atualiza o callback onMouseOver
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipbox.style.top = `${event.pageY + 20}px`;
      this.tooltipbox.style.left = `${event.pageX + 20}px`;
    },
  };

  // function onMouseleave como Object que remove a function callback
  const onMouseLeave = {
    handleEvent() {
      this.tooltipbox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  // function onMouseOver => callback
  function onMouseOver() {
    // event.preventDefault();
    const tooltipbox = boxToolTip(this);
    onMouseMove.tooltipbox = tooltipbox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipbox = tooltipbox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  Tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}

export default initToolTip();
