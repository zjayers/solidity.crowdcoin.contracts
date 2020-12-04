import web3 from './web3';

const address = '0x1090Eee952c98915F9dA02a4884c6dC3645eDbA0';

const abi = [];

const Contract = new web3.eth.Contract(abi, address);
export default Contract;
