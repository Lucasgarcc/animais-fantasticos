// ACCORDLIST - FAQ

function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anima="accordion"] dt',
  );
  const activeClass = "ativo";

  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.toggle(activeClass);

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

export default initAccordion();
