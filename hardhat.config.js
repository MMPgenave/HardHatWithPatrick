require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./scripts/tasks/blockNumber.js");
require("hardhat-gas-reporter");
const GOERLY_RPC_URL = process.env.GOERLY_RPC_URL_Alchemy;
const Mumbai_RPCURL = process.env.Matic_RPC;
const GoerliFromPOKT = process.env.GoerliRPC_POKT;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const coinMarketCap_key = process.env.COINTMARKETCAP_API_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: { url: GOERLY_RPC_URL, accounts: [PRIVATE_KEY], chainId: 5 },
    mumbai: { url: Mumbai_RPCURL, accounts: [PRIVATE_KEY] },
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
    },
    goerliFromPOKT: {
      url: GoerliFromPOKT,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gasReporter.txt",
    noColors: true,
    currency: "usd",
    coinmarketcap: coinMarketCap_key,
  },
  solidity: "0.8.7",
};
