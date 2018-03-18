const BarterAgreement = artifacts.require("./BarterAgreement.sol");

module.exports = function(deployer) {
  deployer.deploy(BarterAgreement);
};

// this syntax will allow you to migrate your contracts to the blockchain in the truffle config file, by running truffle migrate
