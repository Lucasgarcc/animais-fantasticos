// const agora = new Date();
// const future = new Date('Sep 10 2024 00:00:00');

// console.log(agora.getMonth());
// console.log(future);

/*
function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);  //ver quantos dias faltam horas só retirar o 24
} */

/* const diasAgora =  transformarDias(agora.getTime())
const diasFuturo = transformarDias(future.getTime())
//começa com 0 até 11 */

// console.log(diasAgora);
// console.log(diasFuturo);

// console.log( Math.floor(diasAgora - diasFuturo));

function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  console.log(diasSemana);
  console.log(horarioSemana);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  // dias da seman
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  // horario de funcionamento
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]; // expressão que comparamos se horario for maior que 18horas de funcionamento

  // tentando colocar texto de aberto ou fechado ao lado do => 18 o
  function textoFechado() {
    document.addEventListener("mouseover", () => {
      funcionamento.innerHTML = "aberto";
    });
  }
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
    textoFechado();
  }
}

export default initFuncionamento();
