const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.infuraUrl));

const tokenContractAddress = config.tokenContractAddress;
const tokenContractABI = config.tokenContractABI;

const tokenContract = new web3.eth.Contract(tokenContractABI, tokenContractAddress);

async function transferTokens(recipient, amount) {
  const txHash = await tokenContract.methods.transfer(recipient, amount).send({ from: config.botWalletAddress });
  return txHash;
}

module.exports = { transferTokens };
