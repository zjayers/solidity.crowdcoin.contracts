import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const address = "0x45d66ac36C3eDE1a3623bb5b3e660dE5483540F8";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  address
);

export default instance;
