import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE51B36497441ED410b7AfF8Aa51909F4c69315DF'
);

export default instance;

