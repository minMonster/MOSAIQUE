const hre = require("hardhat");
const { expect } = require("chai");
require("@nomiclabs/hardhat-waffle");

async function main(){
    
    const accounts = await hre.ethers.getSigners();
    const account = accounts[0].address;
    const attachs = hre.network.config.attachs;


    const mosaiqueERC721 = await hre.ethers.getContractFactory("MosaiqueERC721V1");
    const erc721 = await mosaiqueERC721.attach(attachs.mosaique721);


    const Mosaique = await hre.ethers.getContractFactory("MosaiqueV1");
    const mosaique = await Mosaique.attach(attachs.mosaique);

    const nft1MID = await mosaique.getNftMID(attachs.bull721, 3);
    console.log("nft1MID:"+nft1MID);
    const nft2MID = await mosaique.getNftMID(attachs.bull721, 4);
    console.log("nft2MID:"+nft2MID);

    const newTokenURI = "1 + 2";

    const sigHash = await hre.ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "bytes32", "string"], [nft1MID, nft2MID, newTokenURI]));
    console.log("sigHash:"+sigHash.toString())
    const personalSignature = await personalSign(accounts[0], sigHash);
    console.log("personalSignature:"+personalSignature.toString());
    // const newTokenId = await mosaique.callStatic.blazon(account, personalSignature, nft1MID, nft2MID, newTokenURI);
    let tx = await mosaique.blazon(account, personalSignature, nft1MID, nft2MID, newTokenURI);
    console.log(tx);
    console.log(await erc721.ownerOf(newTokenId));
}
let personalSign = async (signer, signatureMessageHash) => {
    const hashArray = hre.ethers.utils.arrayify(signatureMessageHash);
    const signature = await signer.signMessage(hashArray);
    return signature;
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });