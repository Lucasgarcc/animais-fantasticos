import AnimaNumeros from './animaNumeros.js';

async function initFetch() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimals(url) {
    try {
      const animaisResp = await fetch(url);
      const animaisJSON = await animaisResp.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      // Garantir que os elementos foram inseridos no DOM antes de iniciar a animação
      const animaNumeros = new AnimaNumeros(
        '[data-numero]',
        '.numeros',
        'ativo',
      );
      animaNumeros.init();
      // erro no console log ignore se não, nem funciona message: 'initAnimaNumeros is not a function'
    } catch (error) {
      console.log(error);
    }
  }
  fetchAnimals('/animaisapi.json');
}

export default initFetch();
