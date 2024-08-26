async function initFetchBitcoin() {
  async function fetchBitcoin() {
    fetch('http://blockchain.info/ticker')
      .then((resp) => resp.json())
      .then((data) => {
        const btcPreco = document.querySelector('.btc-preco');
        btcPreco.innerText = (2000 / data.BRL.sell).toFixed(4);
      })
      .catch((error) => {
        console.log(Error(`Erro: ${error} na requisição da API...`));
      });
  }

  fetchBitcoin('http://blockchain.info/ticker', '.btc-preco');
  fetchBitcoin();
}

export default initFetchBitcoin();
