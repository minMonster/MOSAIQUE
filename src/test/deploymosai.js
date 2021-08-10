const hre = require("hardhat");
const { expect } = require("chai");
require("@nomiclabs/hardhat-waffle");

async function main(){
    const accounts = await hre.ethers.getSigners();
    const account = accounts[0].address;

    const mosaiqueERC721 = await hre.ethers.getContractFactory("MosaiqueERC721V1");
    const erc721 = await mosaiqueERC721.deploy();
    await erc721.deployed();
    console.log("erc721 deployed to:", erc721.address);
    await erc721.initialize();
    console.log("erc721 initialize ....");


    const Mosaique = await hre.ethers.getContractFactory("MosaiqueV1");
    const mosaique = await Mosaique.deploy();
    await mosaique.deployed();
    console.log("mosaique deployed to:", mosaique.address)
    await mosaique.initialize();
    console.log("mosaique initialize ....");
    await erc721.setMinter(mosaique.address);
    await mosaique.setMosaiqueERC721Instance(erc721.address);

    const attachs = hre.network.config.attachs;
    await mosaique.setNFTWhitelist(attachs.bull721, true);
    
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });