class Funcionamento {
  constructor(funcionamento, active) {
    this.funcionamento = document.querySelector(funcionamento);
    this.active = active;
    this.init();
  }

  obterDadosFuncionamento() {
    // Obtém os dados de dias da semana e horário de funcionamento
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }

  obterDadosAtuais() {
    // Obtém o dia e horário atual
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    // Verifica se está aberto com base nos dias e horários de funcionamento
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  mostrarTextoAberto() {
    // Adiciona o texto "aberto" quando o mouse passa sobre o elemento
    document.addEventListener('mouseover', () => {
      this.funcionamento.innerHTML = 'Aberto';
    });
  }

  ativarAberto() {
    // Adiciona a classe "aberto" e chama a função para mostrar o texto se estiver aberto
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.active);
      this.mostrarTextoAberto();
    }
  }

  init() {
    // Inicializa a classe verificando se o elemento existe e chama os métodos necessários
    if (this.funcionamento) {
      this.obterDadosFuncionamento();
      this.obterDadosAtuais();
      this.ativarAberto();
    }
    return this;
  }
}

export default Funcionamento;
