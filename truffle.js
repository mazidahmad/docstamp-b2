// const HDWalletProvider = require('truffle-hdwallet-provider')
// require('dotenv').config()

// const key = process.env.MNEMONIC

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: '*' // Match any network id
    }
  }
};
