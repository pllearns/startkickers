const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'reunion people trip skull scorpion debris loyal hospital hamster negative riot movie',
  'https://rinkeby.infura.io/KrrBdu2V5YLwR9qkNv0I'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('attempting account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });
  
  console.log('contract address at:: ', result.options.address);
};

deploy();