import { eth, web3 } from '@/connector'
import axios from 'axios'
import store from '@/store'
import { IMosaiqueV1, ERC721ABI, ERC20ABI } from './abi/index'
import { defaultDecimals, ceaseTime } from '@/config'
// import addrs from '@/config/address'
export function createERC20Contract(symbolAddress) {
  return new eth.Contract(ERC20ABI, symbolAddress)
}

export function createERC721Contract(symbolAddress) {
  return new eth.Contract(ERC721ABI, symbolAddress)
}

export function createMosaiqueV1Contract(symbolAddress) {
  return new eth.Contract(IMosaiqueV1, symbolAddress)
}

export async function sign(signParams) {
  const nft0MID = '0x3b4408cc3a21f62c119bd0661509f09b03e71f2e2bbbdf1617ec41dba1dded77'
  const nft1MID = '0x0131705c715f48751ccf84c158bf63f5825cba5917f05afb506223a46203f637'
  const newTokenURI = 'https://img1.uapay.io/mpay/img/txt/mosaique/2c9180820000000a017b3a6bd9a80011'
  signParams = signParams || [nft0MID, nft1MID, newTokenURI]
  const sigHash = await web3.utils.sha3(await web3.eth.abi.encodeParameters(['bytes32', 'bytes32', 'string'], signParams))
  const { walletAccount } = store.state
  const { userAddress } = walletAccount
  const hash = await eth.accounts.hashMessage(sigHash)
  let signmssage = '1'
  await eth.sign(hash, userAddress, (e, i) => {
    signmssage = i
  })
  return signmssage
}

// 复制
export async function makeProgrammable(nftContract, tokenId) {
  const { walletAccount } = store.state
  const { userAddress } = walletAccount
  const mosaique = await createMosaiqueV1Contract(nftContract)
  const tx = await mosaique.methods.copyERC721(userAddress, nftContract, Number(tokenId)).send({
    from: userAddress
  })
  return tx
}

/**
 * 查询erc20资产余额
 * @param {*} symbolAddress
 * @param {*} decimals
 * @param {*} flag
 * @param {*} bonusAddress
 * @returns
 */
// export async function getERC20Balance(symbolAddress, decimals, flag, bonusAddress) {
export async function getERC20Balance(symbolAddress, decimals, address) {
  console.log(decimals)
  decimals = 18
  // let address = store.state.address
  // if (flag) {
  //   address = store.state.addrs.pool_address
  // }
  // if (bonusAddress) {
  //   address = bonusAddress
  // }
  const contract = createERC20Contract(symbolAddress)
  if (!decimals) {
    decimals = await contract.methods.decimals().call()
  }
  decimals = Number(decimals) || defaultDecimals
  let balance = await contract.methods.balanceOf(address).call()
  balance = new BigNumber(balance).div(10 ** decimals).toFixed(decimals)
  return new Promise((resolve, reject) => {
    if (typeof balance !== 'undefined') {
      resolve(balance)
    } else {
      reject('get balance error')
    }
  })
}

/**
 * 查询 snapshot 列表
 * @param {*} contractAddress erc721合约地址
 * @param {*} address 所要查询的地址
 * @returns {*} imageItem nft 图片相关信息
 */

/**
 * 查询erc721资产余额
 * @param {*} contractAddress erc721合约地址
 * @param {*} address 所要查询的地址
 * @returns {*} imageItem nft 图片相关信息
 */
export async function getERC721Balance(contractAddress, address) {
  const contract = createERC721Contract(contractAddress)
  const balanceOf = await contract.methods.balanceOf(address).call()
  console.log('balanceOf', balanceOf)
  const tokenOfOwnerByIndexsPromiseAll = []
  for (let i = 0; i < balanceOf; i++) {
    tokenOfOwnerByIndexsPromiseAll.push(contract.methods.tokenOfOwnerByIndex(address, i).call())
  }
  const tokenOfOwnerByIndexs = await Promise.all(tokenOfOwnerByIndexsPromiseAll).then(res => {
    return res
  })
  console.log(tokenOfOwnerByIndexs, 'tokenOfOwnerByIndexs')
  // console.log(tokenOfOwnerByIndexs, 'tokenOfOwnerByIndexs')
  const tokenURIItemsPromiseAll = []
  tokenOfOwnerByIndexs.forEach(i => {
    tokenURIItemsPromiseAll.push(contract.methods.tokenURI(i).call())
  })
  const tokenURIs = await Promise.all(tokenURIItemsPromiseAll)
  console.log(tokenURIs, 'tokenURIItems')
  const prmiseAll = []

  tokenURIs.forEach(url => {
    prmiseAll.push(axios.get(url))
  })
  const images = await Promise.all(prmiseAll).then(res => {
    return res
  })
  const imageItem = images.map((i, index) => {
    return {
      contractAddress,
      tokenOfOwnerByIndex: tokenOfOwnerByIndexs[index],
      tokenUrl: tokenURIs[index],
      ...i.data
    }
  })
  return imageItem
}

/**
 * erc721转账
 * @param {*} contractAddress erc721合约地址
 * @param {*} address 操作地址
 * @param {*} from erc721转出方
 * @param {*} to erc721接收方
 * @param {*} tokenId erc721 tokenId
 * @returns
 */
export async function erc721transfer(contractAddress, address, from, to, tokenId) {
  console.log(contractAddress, address, from, to, tokenId, '123123123')
  const contract = createERC721Contract(contractAddress)
  return contract.methods.safeTransferFrom(from, to, tokenId).send({
    from: address
  })
}

export async function getDecimals(symbolAddress) {
  const contract = createERC20Contract(symbolAddress)
  const decimals = await contract.methods.decimals().call()
  return new Promise(resolve => {
    resolve(decimals)
  })
}

export async function getSymbol(symbolAddress) {
  const contract = createERC20Contract(symbolAddress)
  return contract.methods.symbol().call()
}

export async function getBalance(address, decimals) {
  console.log('>>>>>>>getbalance>>>>>>>>', store.state.addrs)
  address = address || store.state.address
  let balance = await eth.getBalance(address)
  decimals = decimals || defaultDecimals
  balance = new BigNumber(balance).div(10 ** decimals)
  return new Promise(resolve => {
    resolve(balance)
  })
}

// getBlock
export async function getBlock(num) {
  num = num === 0 ? 0 : (num || 'latest')
  return eth.getBlock(num)
}

// getdeadline
export async function getDeadline(time) {
  // time 单位：s
  let error = ''
  const block = await getBlock()
  time = Number(time) || ceaseTime
  const timestamp = block.timestamp
  // timestamp *= 1000
  if (isNaN(Number(timestamp))) {
    error = 'timestamp error'
  }
  const deadline = timestamp + time
  return new Promise((resolve, reject) => {
    if (error) {
      reject(error)
    } else {
      resolve(deadline)
    }
  })
}
//
export function formatUnits(num, decimals) {
  decimals = decimals || defaultDecimals
  return new BigNumber(num).times(10 ** decimals)
}

export function parseUnits(num, decimals) {
  decimals = decimals || defaultDecimals
  return new BigNumber(num).div(10 ** decimals)
}

/**
 * 查询快照状态
 * @param {*} masterNftMID 快照NFTMID
 * @returns
 */
export async function getSnapshotStatus(masterNftMID) {
  // returns (
  //     uint256 initialPrice,
  //     uint256 totalSupply,
  //     uint256 snapshotsMinted,
  //     bytes32 priceCurve,
  //     uint256 birth,
  //     uint256 deadline
  // );
  // 这是平台铸造合约地址,需要根据实际数据调整
  const address = store.state.address
  const contract = new eth.Contract(IMosaiqueV1, address)
  return contract.methods.getSnapshotStatus(masterNftMID).call()
}

/**
 * 查询NFT信息
 * @param {*} nftMID
 * @returns
 */
export async function getNftInfo(nftMID) {
  // returns (
  //     address nftContract,
  //     uint256 tokenId,
  //     address owner,
  //     bool burned,
  //     bool imprinted,
  //     bool unlocked,
  //     bool copy
  // );
  // 这是平台铸造合约地址,需要根据实际数据调整
  const address = store.state.address
  const contract = new eth.Contract(IMosaiqueV1, address)
  return contract.methods.getNftInfo(nftMID).call()
}

/**
 * 查询NFTMID
 * @param {*} nftContract nft合约地址
 * @param {*} tokenId nft tokenId
 * @returns
 */
export async function getNftMID(nftContract, tokenId) {
  // returns (bytes32 nftMID);
  // 这是平台铸造合约地址,需要根据实际数据调整
  const address = store.state.address
  const contract = new eth.Contract(IMosaiqueV1, address)
  return contract.methods.getNftMID(nftContract, tokenId).call()
}

