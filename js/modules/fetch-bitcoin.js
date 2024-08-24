async function initFetchBitcoin() {
  async function fetchBitcoin(url, traget) {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const btcPreco = document.querySelector(traget);
        btcPreco.innerText = (2000 / data.BRL.sell).toFixed(4);
      })
      .catch((error) => {
        console.log(Error(`Erro: ${error} na requisição da API...`));
      });
  }
  // fetch mostra valor da Bitcoin
  fetchBitcoin('http://blockchain.info/ticker', '.btc-preco');
}

export default initFetchBitcoin();
