const hre = require('hardhat')
const { expect } = require('chai')
require('@nomiclabs/hardhat-waffle')

async function main() {
  const accounts = await hre.ethers.getSigners()
  const account = accounts[0].address
  const attachs = hre.network.config.attachs
  const Bull = await hre.ethers.getContractFactory('BullsOnTheBlock')
  console.log('Bull address:' + attachs.bull721)
  const bull = await Bull.attach(attachs.bull721)

  const count = await bull.balanceOf(account)
  console.log('count:' + count)

  const tx = await bull['safeTransferFrom(address,address,uint256)'](account, attachs.mosaique, 4)
  console.log(tx)
  // const transfer = await bull.safeTransferFrom(account, attachs.mosaique, 1);
  // expect(tx).to.emit(mosaique, "LogNFTReceived");
  // expect(tx).to.emit(mosaique, "LogNFTUnlocked");
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
