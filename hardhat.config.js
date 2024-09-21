require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
};

require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.13",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.f87d63c8ed2840eda6cfa5cb6bb7548d}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};