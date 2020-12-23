const Migrations = artifacts.require("Migrations");
const Lending = artifacts.require("Lending");
const VUSDT = artifacts.require("VUSDT");
const ObjectNFT = artifacts.require("ObjectNFT");

module.exports = function(deployer) {
    deployer.deploy( Lending , ObjectNFT.address , VUSDT.address );
};
