const hre = require('hardhat')
const { expect } = require('chai')
require('@nomiclabs/hardhat-waffle')

async function main() {
  const accounts = await hre.ethers.getSigners()
  const account = accounts[0].address
  const attachs = hre.network.config.attachs

  console.log(attachs.mosaique721)

  const mosaiqueERC721 = await hre.ethers.getContractFactory('MosaiqueERC721V1')
  const erc721 = await mosaiqueERC721.attach(attachs.mosaique721)
  let count = await erc721.balanceOf(account)
  console.log('copy before count:' + count)

  const Mosaique = await hre.ethers.getContractFactory('MosaiqueV1')
  const mosaique = await Mosaique.attach(attachs.mosaique)
  const tx = await mosaique.copyERC721(account, attachs.bull721, 0)
  console.log(tx)

  count = await erc721.balanceOf(account)
  console.log('copy end count:' + count)

  // let tx1 = await erc721.tokenURI(0);
  // console.log("copy end tokenURI:"+tx1);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
