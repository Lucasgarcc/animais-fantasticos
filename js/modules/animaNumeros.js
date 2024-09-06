class AnimaNumeros {
  constructor(numero, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numero);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.animaJaExecutada = false; // Inicializa a flag

    // Bind o this do objeto do callback do IntersectionObserver
    this.handleIntersection = this.handleIntersection.bind(this);
    this.init();
  }

  static incrementorNumero(numero) {
    const total = +numero.innerHTML;
    const incremento = Math.floor(total / 200);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start >= total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 20); // Valor fixo para consistência
  }

  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementorNumero(numero),
    );
  }

  // Método que ocorre quando o alvo entra na viewport
  handleIntersection(entries) {
    // Entradas

    entries.forEach((entry) => {
      /* isIntersecting é uma propriedade do objeto IntersectionObserverEntry, 
      que é passado para o callback do IntersectionObserver quando um elemento é observado. */

      if (entry.isIntersecting) {
        // Adiciona a classe de observação

        entry.target.classList.add(this.observerClass);
        this.animaNumeros(); // Inicia a animação dos números

        // Se desejar que a animação ocorra apenas uma vez, remova a seguinte linha

        this.observer.unobserve(entry.target); // Para de observar após a animação
      }
    });
  }

  addIntersectionObserver() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.5, // 50% da página
      // Ajuste conforme necessário para quando o elemento é considerado visível
    });
    this.observer.observe(this.observerTarget);
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addIntersectionObserver();
    }
    return this;
  }
}

export default AnimaNumeros;
