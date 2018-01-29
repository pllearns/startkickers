import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6F9484437aC3cc445597770D8a9b4739DA2c8955'
);

export default instance;

