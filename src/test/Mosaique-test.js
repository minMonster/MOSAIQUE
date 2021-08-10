const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, network, upgrades } = require("hardhat");

const strToBytes32 = ethers.utils.formatBytes32String;
const provider = network.provider;
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

let getCurrentBlockNumber = async () => {
    return parseInt(await provider.send("eth_blockNumber"));
  }

let advanceBlock = async (numberOfBlocks) => {
    let i = 0;
    while (i < numberOfBlocks) {
    ++i;
    await provider.send("evm_mine");
    }
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

describe("Mosaique Tests", () => {

    let erc721, mosaique;

    beforeEach("Setting up", async () => {
        [deployer, a, b, c] = await ethers.getSigners();
        const ERC721 = await ethers.getContractFactory("MosaiqueERC721V1");
        erc721 = await upgrades.deployProxy(ERC721);
        await erc721.setMinter(deployer.address);
        mosaiqueERC721 = await upgrades.deployProxy(ERC721);
        const Mosaique = await ethers.getContractFactory("MosaiqueV1");
        mosaique = await upgrades.deployProxy(Mosaique);
        await mosaiqueERC721.setMinter(mosaique.address);
        await mosaique.setMosaiqueERC721Instance(mosaiqueERC721.address);
        await mosaique.setNFTWhitelist(erc721.address, true);
        await erc721.safeMint(deployer.address, "0");
        expect(await erc721.ownerOf(0)).to.equal(deployer.address);
    });

    it("Should receive incoming ERC721 token", async () => {
        let tx = await erc721["safeTransferFrom(address,address,uint256)"](deployer.address, mosaique.address, 0);
        expect(tx).to.emit(mosaique, "LogNFTReceived");
        expect(tx).to.emit(mosaique, "LogNFTUnlocked");
    });

    it("Should copy outside ERC721 token", async () => {
        let tx = await mosaiqueERC721.balanceOf(deployer.address);
        expect(tx).to.equal(0);
        tx = await mosaique.copyERC721(deployer.address, erc721.address, 0);
        expect(tx).to.emit(mosaique, "LogNFTCopied");
        tx = await mosaiqueERC721.balanceOf(deployer.address);
        expect(tx).to.equal(1);
        tx = await erc721.tokenURI(0);
        let tx1 = await mosaiqueERC721.tokenURI(0);
        expect(tx).to.equal(tx1);
    });

    it("Should mint blazon NFT", async () => {
        await erc721.safeMint(deployer.address, "1");
        await erc721["safeTransferFrom(address,address,uint256)"](deployer.address, mosaique.address, 0);
        await erc721["safeTransferFrom(address,address,uint256)"](deployer.address, mosaique.address, 1);
        const nft0MID = await mosaique.getNftMID(erc721.address, 0);
        const nft1MID = await mosaique.getNftMID(erc721.address, 1);
        const newTokenURI = "0 + 1";
        const sigHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "bytes32", "string"], [nft0MID, nft1MID, newTokenURI]));
        const personalSignature = personalSign(deployer, sigHash);
        const newTokenId = await mosaique.callStatic.blazon(deployer.address, personalSignature, nft0MID, nft1MID, newTokenURI);
        let tx = await mosaique.blazon(deployer.address, personalSignature, nft0MID, nft1MID, newTokenURI);
        expect(tx).to.emit(mosaique, "LogMintedBlazonNFT");
        expect(await mosaiqueERC721.ownerOf(newTokenId)).to.equal(deployer.address);
    });

    it("Should mint inscription NFT using 2 NFTs", async () => {
        await erc721.safeMint(deployer.address, "1");
        await erc721["safeTransferFrom(address,address,uint256)"](deployer.address, mosaique.address, 0);
        await erc721["safeTransferFrom(address,address,uint256)"](deployer.address, mosaique.address, 1);
        const nft0MID = await mosaique.getNftMID(erc721.address, 0);
        const nft1MID = await mosaique.getNftMID(erc721.address, 1);
        const newTokenURI = "0 + 1";
        const sigHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "bytes32", "string"], [nft0MID, nft1MID, newTokenURI]));
        const personalSignature = personalSign(deployer, sigHash);
        const newTokenId = await mosaique.callStatic["inscribe(address,bytes,bytes32,bytes32,string)"](deployer.address, personalSignature, nft0MID, nft1MID, newTokenURI);
        let tx = await mosaique["inscribe(address,bytes,bytes32,bytes32,string)"](deployer.address, personalSignature, nft0MID, nft1MID, newTokenURI);
        expect(tx).to.emit(mosaique, "LogConsumedInscriptionNFT");
        expect(tx).to.emit(mosaique, "LogMintedInscribedNFT");
        expect(await mosaiqueERC721.ownerOf(newTokenId)).to.equal(deployer.address);
    });

    it("Should mint inscription NFT using 1 NFT", async () => {
        await erc721["safeTransferFrom(address,address,uint256)"](deployer.address, mosaique.address, 0);
        const nft0MID = await mosaique.getNftMID(erc721.address, 0);
        const newTokenURI = "000";
        const sigHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "string"], [nft0MID, newTokenURI]));
        const personalSignature = personalSign(deployer, sigHash);
        const newTokenId = await mosaique.callStatic["inscribe(address,bytes,bytes32,string)"](deployer.address, personalSignature, nft0MID, newTokenURI);
        let tx = await mosaique["inscribe(address,bytes,bytes32,string)"](deployer.address, personalSignature, nft0MID, newTokenURI);
        expect(tx).to.emit(mosaique, "LogMintedInscribedNFT");
        expect(await mosaiqueERC721.ownerOf(newTokenId)).to.equal(deployer.address);
    });

    it("Should create a snapshot supply, mint a snapshot, and exhaust supplies", async () => {
        await erc721["safeTransferFrom(address,address,uint256)"](deployer.address, mosaique.address, 0);
        const nft0MID = await mosaique.getNftMID(erc721.address, 0);
        // Creating a snapshot supply with a supply of 1
        const initialPrice = bigNumberToString(1 * 10 ** 18);
        const totalSupply = 1;
        const priceCurve = strToBytes32("Preset 1");
        const birth = await getCurrentBlockNumber();
        const deadline = birth + 10;
        const sigHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "uint256", "uint256", "bytes32", "uint256", "uint256"], [nft0MID, initialPrice, totalSupply, priceCurve, birth, deadline]));
        const personalSignature = personalSign(deployer, sigHash);
        let tx = await mosaique.createSnapshotSupply(deployer.address, personalSignature, nft0MID, initialPrice, totalSupply, priceCurve, birth, deadline);
        expect(tx).to.emit(mosaique, "LogCreatedSnapshotSupply").withArgs(deployer.address, nft0MID);
        tx = await mosaique.getSnapshotStatus(nft0MID);
        expect(tx.initialPrice).to.equal(initialPrice);
        expect(tx.totalSupply).to.equal(totalSupply);
        expect(tx.snapshotsMinted).to.equal(0);
        expect(tx.priceCurve).to.equal(priceCurve);
        expect(tx.birth).to.equal(birth);
        expect(tx.deadline).to.equal(deadline);
        // Minting 1 snapshot using account A's signature
        const newTokenURI = "000";
        const aSigHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "string"], [nft0MID, newTokenURI]));
        const aPersonalSignature = personalSign(a, aSigHash);
        // - Should reject request from account A due to role constraints
        const aSignerInstance = await mosaique.connect(a);
        await expect(aSignerInstance.mintSnapshot(a.address, aPersonalSignature, nft0MID, newTokenURI)).to.be.reverted;
        // - Should succeed
        tx = await mosaique.mintSnapshot(a.address, aPersonalSignature, nft0MID, newTokenURI);
        expect(tx).to.emit(mosaique, "LogMintedSnapshot");
        expect(tx).to.emit(mosaique, "LogExhaustedSnapshotSupply");
        tx = await mosaique.getSnapshotStatus(nft0MID);
        expect(tx.snapshotsMinted).to.equal(1);
        // Create another supply that expires immediately
        await erc721.safeMint(deployer.address, "1");
        await erc721["safeTransferFrom(address,address,uint256)"](deployer.address, mosaique.address, 1);
        const nft1MID = await mosaique.getNftMID(erc721.address, 1);
        const initialPrice1 = bigNumberToString(1 * 10 ** 18);
        const totalSupply1 = 2;
        const priceCurve1 = strToBytes32("Preset 1");
        const birth1 = await getCurrentBlockNumber();
        const deadline1 = birth + 10;
        const sigHash1 = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "uint256", "uint256", "bytes32", "uint256", "uint256"], [nft1MID, initialPrice1, totalSupply1, priceCurve1, birth1, deadline1]));
        const personalSignature1 = personalSign(deployer, sigHash1);
        tx = await mosaique.createSnapshotSupply(deployer.address, personalSignature1, nft1MID, initialPrice1, totalSupply1, priceCurve1, birth1, deadline1);
        // - Should mint just fine
        const aSigHash1 = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "string"], [nft1MID, newTokenURI]));
        const aPersonalSignature1 = personalSign(a, aSigHash1);
        await mosaique.mintSnapshot(a.address, aPersonalSignature1, nft1MID, newTokenURI);
        // - Should prevent minting past deadline
        await advanceBlock(10);
        await expect(mosaique.mintSnapshot(a.address, aPersonalSignature1, nft1MID, newTokenURI)).to.be.reverted;  // The digital signature can be reused - it does NOT prevent replay and abuse, which is why all write functions can only be called by a trusted operator.
    });

});