const Migrations = artifacts.require("Migrations");
const VUSDT = artifacts.require("VUSDT");

module.exports = function(deployer) {
  deployer.deploy(VUSDT);
};
