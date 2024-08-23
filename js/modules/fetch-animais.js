import AnimaNumeros from './animaNumeros.js';

async function initFetch() {
  /*  cria div contendo os valores do api.json
  total dos animais...
  */

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `
    <h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span>
    `;
    return div;
  }

  /*
    Garantir que os elementos foram 
    inseridos no DOM antes de iniciar a animação
    */

  function animaAnimalNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  /* Puxa os animais través do arquivo json
   e cria cada animal.
  */

  async function fetchAnimals(url, target) {
    try {
      // Fetch, espera a resposta e  transforma em json

      const animaisResp = await fetch(url);
      const animaisJSON = await animaisResp.json();
      const numerosGrid = document.querySelector(target);
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      animaAnimalNumeros();

      // erro no console log ignore se não, nem funciona message: 'initAnimaNumeros is not a function'
    } catch (error) {
      console.log(error);
    }
  }

  /* Garanti que os valores puxados
  pela api e pelo elemento class
  */

  return fetchAnimals('/animaisapi.json', '.numeros-grid');
}

export default initFetch();
