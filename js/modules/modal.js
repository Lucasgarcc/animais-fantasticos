function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  botaoAbrir.addEventListener("click", toggleModal);
  botaoFechar.addEventListener("click", toggleModal);

  function clicouForaModal(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }
  if (botaoAbrir && botaoFechar && containerModal) {
    containerModal.addEventListener("click", clicouForaModal);
  }
}

export default initModal();
