const HTLC_Contract = artifacts.require("HTLCTokenSwap.sol");

module.exports = function(deployer) {
  deployer.deploy(HTLC_Contract, "<TOKEN_CONTRACT_ADDRESS>", {gas: 5000000});
};