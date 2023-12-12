

const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKey = "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f";
const privateKeyProvider = new PrivateKeyProvider(privateKey, "http://127.0.0.1:8545");

module.exports = {
  networks: {
    development: {
    provider: privateKeyProvider,
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
     gas: 1048576,
     gasPrice: 0
    },
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
};
