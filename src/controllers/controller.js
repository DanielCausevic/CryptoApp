const bitcoinService = require("../services/service");

async function getBitcoinPrice(req, res) {
    const price = await bitcoinService.fetchBitcoinPrice();
    res.json({ bitcoinPrice : price });
}

module.exports = { getBitcoinPrice };