const hre = require("hardhat");
const { expect } = require("chai");
require("@nomiclabs/hardhat-waffle");

async function main(){
    
    const accounts = await hre.ethers.getSigners();
    const account = accounts[0].address;
    const attachs = hre.network.config.attachs;

    const Mosaique = await hre.ethers.getContractFactory("MosaiqueV1");
    const mosaique = await Mosaique.attach(attachs.mosaique);
    await mosaique.setNFTWhitelist(attachs.first721, true);

    // const snapshots = mosaique.snapshotMapping();

    // console.log(snapshots)

    // const mosaiqueERC721 = await hre.ethers.getContractFactory("MosaiqueERC721V1");
    // const erc721 = await mosaiqueERC721.attach(attachs.mosaique721);
    // let count = await erc721.balanceOf(account);
    // console.log("copy before count:"+count);

    // for(var i = 0;i<count;i++){
    //     const tokenindex = await erc721.tokenOfOwnerByIndex(account, i);
    //     console.log("tokenindex"+i+":"+tokenindex);
    //     const tokenURI =await erc721.tokenURI(tokenindex);
    //     console.log("tokenURI"+i+":"+tokenURI);
    // }


    


    // let tx1 = await erc721.tokenURI(0);
    // console.log("copy end tokenURI:"+tx1);

    // const Bull = await hre.ethers.getContractFactory("BullsOnTheBlock");
    // console.log(attachs.bull721);
    // const bull = await Bull.attach(attachs.bull721);
    // count = await bull.balanceOf(attachs.mosaique);
    // console.log("mosaique in bull token count:"+count);

    // for(var i = 0;i<count;i++){
    //     const tokenindex = await bull.tokenOfOwnerByIndex(attachs.mosaique, i);
    //     console.log("tokenindex"+i+":"+tokenindex);
    //     const tokenURI =await bull.tokenURI(tokenindex);
    //     console.log("tokenURI"+i+":"+tokenURI);
    // }


    // const Mosaique = await hre.ethers.getContractFactory("MosaiqueV1");
    // const mosaique = await Mosaique.attach(attachs.mosaique);
    // let tx = await mosaique.copyERC721(account, attachs.bull721, 0);
    // console.log(tx);

    // count = await erc721.balanceOf(account);
    // console.log("copy end count:"+count);

  
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });