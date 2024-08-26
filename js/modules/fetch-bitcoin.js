async function initFetchBitcoin() {
  async function fetchBitcoin(url, target) {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const btcPreco = document.querySelector(target);
        btcPreco.innerText = (2000 / data.BRL.sell).toFixed(4);
      })
      .catch((error) => {
        console.log(Error(`Erro: ${error} na requisição da API...`));
      });
  }
  fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
}

export default initFetchBitcoin();
