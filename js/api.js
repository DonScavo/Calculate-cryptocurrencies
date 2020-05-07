class API {
    constructor(apiKey) {
        this.apiKey;
    }

    async obtenerCoinsApi() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;

        const urlObtenerCoins = await fetch(url);

        const coins = await urlObtenerCoins.json();

        return {
            coins
        }
    }

    async obtenerValores(moneda, criptomoneda) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;

        const urlObtenerFullData = await fetch(url);

        const fullData = await urlObtenerFullData.json();

        return {
            fullData
        }
    }

}
