
// require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const wallets = {}
wallets.dev = process.env.DEVNET;
wallets.test = process.env.TESTNET;
wallets.main = process.env.MAINNET;

const W3 = require('web3');
const web3 = new W3();
const mnemonic = process.env.MNEMONIC
// console.log(new HDWalletProvider(wallets.dev, 'https://mainnet.infura.io/v3/a2ff417ce43a446abdafca0747aef983'))
module.exports = {
  plugins: ["truffle-security"],
  migrations_directory: "./migrations",
  networks: {
    local: {
      host: "localhost",
      port: 7545,
      network_id: "5777" // Match any network id
    },

    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    rinkeby : {
      provider: () => {
        return new HDWalletProvider(wallets.dev, 'https://rinkeby.infura.io/v3/0101819596804fcb9b5e509abd2760cb');
      },
      gas: 9950049,
      gasPrice: web3.utils.toWei("150", "gwei"),
      skipDryRun: true,
      network_id: "4",
    },
    mainnet : {
      provider: () => {
        return new HDWalletProvider(wallets.main  , 'https://mainnet.infura.io/v3/0101819596804fcb9b5e509abd2760cb');
      },
      gas: 9950049,
      gasPrice: web3.utils.toWei("80", "gwei"),
      skipDryRun: true,
      network_id: "1",
    },
  },
  compilers: {
    solc: {
      version: "0.6.2", // A version or constraint - Ex. "^0.5.0"
      docker: false, // Use a version obtained through docker
      settings: {
        optimizer: {
          enabled: false,
          runs: 200   // Optimize for how many times you intend to run the code
        },
        evmVersion: "byzantium" // Default: "petersburg"
      }
    }
  }
}
