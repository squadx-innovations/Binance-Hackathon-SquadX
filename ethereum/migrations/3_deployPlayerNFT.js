const Migrations = artifacts.require("Migrations");
const ObjectNFT = artifacts.require("ObjectNFT");

module.exports = async function(deployer) {
    deployer.deploy( ObjectNFT );
};
