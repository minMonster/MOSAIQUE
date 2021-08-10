const hre = require("hardhat");
const { expect } = require("chai");
const { BigNumber } = require("ethers");
require("@nomiclabs/hardhat-waffle");
const provider = network.provider;

const strToBytes32 = hre.ethers.utils.formatBytes32String;
let getCurrentBlockNumber = async () => {
    return parseInt(await provider.send("eth_blockNumber"));
}

let bigNumberToString = (number) => {
    let bn = BigNumber.from(number.toString());
    return bn.toString();
}

let personalSign = async (signer, signatureMessageHash) => {
    const hashArray = ethers.utils.arrayify(signatureMessageHash);
    const signature = await signer.signMessage(hashArray);
    return signature;
}

async function main(){
    const accounts = await hre.ethers.getSigners();
    const account = accounts[0].address;
    const attachs = hre.network.config.attachs;

    const Mosaique = await hre.ethers.getContractFactory("MosaiqueV1");
    const mosaique = await Mosaique.attach(attachs.mosaique);

    const mosaiqueERC721 = await hre.ethers.getContractFactory("MosaiqueERC721V1");
    const erc721 = await mosaiqueERC721.attach(attachs.mosaique721);

    const nft0MID = await mosaique.getNftMID(erc721.address, 2);
    console.log("snapshot nft0MID:"+nft0MID);
    const initialPrice = bigNumberToString(1 * 10 ** 18);
    console.log("initialPrice:"+initialPrice);
    const totalSupply = 10;
    console.log("totalSupply:"+totalSupply);
    const priceCurve = strToBytes32("Preset 1");
    console.log("priceCurve:"+priceCurve);
    const birth = await getCurrentBlockNumber();
    console.log("birth:"+birth);
    const deadline = birth + 10000;
    console.log("deadline:"+deadline);
    console.log("--------------------snapshot before----------------------");
    const sigHash = ethers.utils.keccak256(hre.ethers.utils.defaultAbiCoder.encode(["bytes32", "uint256", "uint256", "bytes32", "uint256", "uint256"], [nft0MID, initialPrice, totalSupply, priceCurve, birth, deadline]));
    const personalSignature = personalSign(accounts[0], sigHash);
    let tx = await mosaique.createSnapshotSupply(account, personalSignature, nft0MID, initialPrice, totalSupply, priceCurve, birth, deadline);
    console.log(tx);    
    // await erc721["safeTransferFrom(address,address,uint256)"](deployer.address, mosaique.address, 0);
  

        
        
        
        // expect(tx).to.emit(mosaique, "LogCreatedSnapshotSupply").withArgs(deployer.address, nft0MID);
        // tx = await mosaique.getSnapshotStatus(nft0MID);
        // expect(tx.initialPrice).to.equal(initialPrice);
        // expect(tx.totalSupply).to.equal(totalSupply);
        // expect(tx.snapshotsMinted).to.equal(0);
        // expect(tx.priceCurve).to.equal(priceCurve);
        // expect(tx.birth).to.equal(birth);
        // expect(tx.deadline).to.equal(deadline);
        // // Minting 1 snapshot using account A's signature
        // const newTokenURI = "000";
        // const aSigHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "string"], [nft0MID, newTokenURI]));
        // const aPersonalSignature = personalSign(a, aSigHash);
        // // - Should reject request from account A due to role constraints
        // const aSignerInstance = await mosaique.connect(a);
        // await expect(aSignerInstance.mintSnapshot(a.address, aPersonalSignature, nft0MID, newTokenURI)).to.be.reverted;
        // // - Should succeed
        // tx = await mosaique.mintSnapshot(a.address, aPersonalSignature, nft0MID, newTokenURI);
        // expect(tx).to.emit(mosaique, "LogMintedSnapshot");
        // expect(tx).to.emit(mosaique, "LogExhaustedSnapshotSupply");
        // tx = await mosaique.getSnapshotStatus(nft0MID);
        // expect(tx.snapshotsMinted).to.equal(1);

        
    
  

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });