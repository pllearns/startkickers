import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x66Abf9dF2F41dD91eD6447e093DEbA64937871f1'
);

export default instance;

