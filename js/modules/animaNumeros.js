class AnimaNumeros {
  constructor(numero, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numero);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // Bind o this do objeto do callback da mutation
    this.handleMutation = this.handleMutation.bind(this);
    this.init();
  }

  static incrementorNumero(numero) {
    const total = +numero.innerHTML;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 50); // Valor fixo para consistência
  }

  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementorNumero(numero),
    );
  }

  // Metodo que ocorre quando a mutação tiver ativa
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}

export default AnimaNumeros;
