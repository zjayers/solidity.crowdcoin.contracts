import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const address = "0x1090Eee952c98915F9dA02a4884c6dC3645eDbA0";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  address
);

export default instance;
