const hre = require("hardhat");
const { expect } = require("chai");
require("@nomiclabs/hardhat-waffle");

async function main(){
    const deployer = await hre.ethers.getSigners();
    console.log("account:"+deployer[0].address.toString())
    // [deployer, a, b, c] = await ethers.getSigners();

    const Bull = await hre.ethers.getContractFactory("BullsOnTheBlock");
    const bull = await Bull.deploy()
    await bull.deployed();
    console.log("pull erc721 deployed to:", bull.address);
   
    // const baseURI = await pull._baseURI();
    // console.log("baseURI："+baseURI);
    await bull.emergencySetStartingIndexBlock();
    console.log("emergencySetStartingIndexBlock is ready");
    await bull.setBaseURI("https://bullsontheblock.com/api/tokens/")
    console.log("setBaseURI is ready");
    await bull.flipSaleState();
    console.log("flipSaleState is ready");
    await bull.calcStartingIndex();
    console.log("calcStartingIndex is ready");
    await bull.mintBull(10);
    console.log("mintBull is ready");
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });