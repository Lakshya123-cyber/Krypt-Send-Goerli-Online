//

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/32O7ks9R2AQ2d7X7M0rVXBn83Mbkdf-9",
      accounts: [
        "b7b56bfc466edebe222b9a48a4b3bde53f7b9e2d41efe24bd8b3a2b5e0866862",
      ],
    },
  },
};
