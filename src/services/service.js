const axios = require("axios");

async function fetchBitcoinPrice() {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: { 'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY },
        params: { start: 1, limit: 1, convert: 'USD' }
    });

    return response.data.data.find(coin => coin.symbol === "BTC").quote.USD.price.toFixed(2);
}

module.exports = { fetchBitcoinPrice };