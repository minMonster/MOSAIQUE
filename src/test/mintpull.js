const hre = require("hardhat");
const { expect } = require("chai");
require("@nomiclabs/hardhat-waffle");

async function main(){
    const accounts = await hre.ethers.getSigners();
    const account = accounts[0].address;
    const attachs = hre.network.config.attachs;
    const Bull = await hre.ethers.getContractFactory("BullsOnTheBlock");
    console.log(attachs.pull721);
    const bull = await Bull.attach(attachs.bull721);
    await bull.setBaseURI("https://bullsontheblock.com/api/tokens/")
    // const baseURI = await pull._baseURI();
    // console.log("baseURI："+baseURI);
    // await bull.flipSaleState();
    // await bull.calcStartingIndex();
    // await bull.mintBull(10);

    const count = await bull.balanceOf(account);
    console.log("count:"+count.toString());

}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });