function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]"); // alvo data
    numeros.forEach((numero) => {
      // para percorrer cada numero do nodeList

      const total = +numero.innerHTML; // tranforma text em numero com uso do sinal '=+'

      const incremento = Math.floor(total / 100); // incremento de numeros inteiros Math.floor(), ajuda na equação do numeros transformando em inteiros

      let start = 0; // contador
      const timer = setInterval(() => {
        // criar os intervalos de tempo entre os numeros + a function anonima

        start += incremento; // incremento contatenado ao start = 0
        numero.innerText = start; // exibe o numero no html

        if (start > total) {
          // verifica for maior que 0
          numero.innerText = total; // evita numeros ultrapassar o numero do total
          clearInterval(timer); // limpa o intervalo
        }
      }, 50 * Math.random()); // cria um atraso aleatorio entre os numeros
    });
  }
  const observerTarget = document.querySelector(".numeros");
  let observer;
  // função observador para seção numeros
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      // se existe no target class ativo
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}

export default initAnimaNumeros();
