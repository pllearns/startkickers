## KickStart Coin

##### There are instructions to build this app for production, but keep in mind that we wont be pushing this component to production during our walkthrough.

We are going to install dependencies, and then compile the contract, run a test, and then deploy for frontend work. 
``` bash
# install dependencies
npm install
npm run compile 
npm test
npm run deploy
```

After we deploy our contract, make sure to copy the address from the terminal, and then go into the `factory.js` file, and update the interface helper: 

``` js
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x66Abf9dF2F41dD91eD6447e093DEbA64937871f1' // this is where the address is placed after deploying the factory contract
);

export default instance;
```

then go ahead and run in development: 

``` bash

npm run dev

```


## Built With

* [Web3.js](https://github.com/ethereum/web3.js) - Ethereum JavaScript API
* [Solidity](https://github.com/ethereum/solidity) - Language for Ethereum Smart Contracts
* [Infura](https://github.com/ethereum/solidity) - Ethereum Client Provider
* [Rinkeby](https://www.rinkeby.io/#stats) - Ethereum Test Network
* [MetaMask](https://metamask.io/) - Chrome extension for access to Ethereum and TestRPCs 
* [Solidity for VSCode](https://github.com/juanfranblanco/vscode-solidity) - VSCode add on for syntax highlighting and in editor compiling.  

## Authors

* **Phillip Lorenzo** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Oakland Blockchain Developers
* Brandon Gilchrist
* Rachel Ralston
* Stephen Grider