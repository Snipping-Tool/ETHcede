require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bey8ItvrnkRdXuNTIzik2pZPtdk6qnoc',
      accounts: ['5d85f7a8ed699881eb4ac77e19a2b7d23bd50da7637be9ef48f6a0e111968a3c'],
    },
  },
};