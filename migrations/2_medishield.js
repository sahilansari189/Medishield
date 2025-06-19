const Medishield = artifacts.require("Medishield");
module.exports = function(deployer) {
  deployer.deploy(Medishield);
};
