// ANIMAÇÃO AO SCROLL

function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');
  const windowTela = window.innerHeight * 0.6;

  // variavel pega valor do window html atraves da prorpriedade
  // innerHeight multiplicado por 60% da tela.

  const ativo = "ativo";

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowTela <= 0;
      // concatena a variavel -[section] a o metodo que pega,
      // todos valores do scroll da pagina concatenado ao valor do topo.
      if (isSectionVisible) {
        // varifica se valor do scroll da pagina for maior que zero.
        section.classList.add(ativo);
      } else if (section.classList.contains(ativo)) {
        section.classList.remove(ativo);
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

export default initScrollAnimation();
