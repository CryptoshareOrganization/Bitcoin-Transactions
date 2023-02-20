const { testnet, mainnet } = require("bitcore-lib/lib/networks");
const { createWallet, createHDWallet } = require("./wallet.bitcoin");
const sendPayment = require("./send.bitcoin");



sendPayment("bananas", 1)

// console.log(createHDWallet(testnet))
