import { web3, eth } from '@/connector'
import {  MosaiqueV1, MosaiqueERC721V1, ERC721ABI,ERC20ABI
} from './abi'
import store from '@/store'
import { defaultDecimals, ceaseTime } from '@/config'

// import addrs from '@/config/address'
export function createERC20Contract (symbolAddress) {
  return new eth.Contract(erc20ABI, symbolAddress)
}

export function createERC721Contract (symbolAddress) {
    return new eth.Contract(erc20ABI, symbolAddress)
  }

/**
 * 查询erc20资产余额
 * @param {*} symbolAddress 
 * @param {*} decimals 
 * @param {*} flag 
 * @param {*} bonusAddress 
 * @returns 
 */
export async function getERC20Balance (symbolAddress, decimals, flag, bonusAddress) {
  console.log(decimals)
  let address = store.state.address
  if (flag) {
    address = store.state.addrs.pool_address
  }
  if (bonusAddress) {
    address = bonusAddress
  }
  const contract = createERC721Contract(symbolAddress)
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
 * 查询erc721资产余额
 * @param {*} contractAddress erc721合约地址
 * @param {*} address 所要查询的地址
 * @returns 
 */
export async function getERC721Balance (contractAddress, address) {
    const contract = createERC721Contract(contractAddress)
    //查询用户的NFT数量
    const balanceOf = await contract.balanceOf(address);
    console.log("balanceOf: ", balanceOf);

    var tokenURIs=new Array()
    //根据索引遍历用户NFT
    //这里需要考虑await会影响渲染速度，可以考虑异步处理
    for(i=0;i<balanceOf;i++) {
        const tokenOfOwnerByIndex = await contract.tokenOfOwnerByIndex(address,i);
        console.log("tokenOfOwnerByIndex: ", tokenOfOwnerByIndex);

        //查询指定tokenId的token信息
        const tokenURI = await contract.methods.tokenURI(tokenOfOwnerByIndex).call();
        console.log("tokenURI: ", tokenURI);
        var item = {"tokenId":tokenOfOwnerByIndex}
        item.tokenURI=tokenURI;
        tokenURIs.push(item);
    }
    return tokenURIs
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
export async function erc721transfer (contractAddress, address,from,to,tokenId) {
    const contract = createERC721Contract(contractAddress)
    return contract.methods.safeTransferFrom(from,to,tokenId).send({
        from: address
    })
}

export async function getDecimals (symbolAddress) {
  const contract = createERC20Contract(symbolAddress)
  const decimals = await contract.methods.decimals().call()
  return new Promise(resolve => {
    resolve(decimals)
  })
}

export async function getSymbol (symbolAddress) {
  const contract = createERC20Contract(symbolAddress)
  return contract.methods.symbol().call()
}

export async function getBalance (address, decimals) {
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
export async function getBlock (num) {
  num = num === 0 ? 0 : (num || 'latest')
  return eth.getBlock(num)
}

// getdeadline
export async function getDeadline (time) {
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
export function formatUnits (num, decimals) {
  decimals = decimals || defaultDecimals
  return new BigNumber(num).times(10 ** decimals)
}

export function parseUnits () {
  decimals = decimals || defaultDecimals
  return new BigNumber(num).div(10 ** decimals)
}

/**
 * 查询快照状态
 * @param {*} masterNftMID 快照NFTMID
 * @returns 
 */
export async function getSnapshotStatus (masterNftMID) {
    // returns (
    //     uint256 initialPrice,
    //     uint256 totalSupply,
    //     uint256 snapshotsMinted,
    //     bytes32 priceCurve,
    //     uint256 birth,
    //     uint256 deadline
    // );
    //这是平台铸造合约地址,需要根据实际数据调整
    const address = store.state.address
    let contract = new eth.Contract(MosaiqueV1, address)
    return contract.methods.getSnapshotStatus(masterNftMID).call()
}

/**
 * 查询NFT信息
 * @param {*} nftMID 
 * @returns 
 */
export async function getNftInfo (nftMID) {
    // returns (
    //     address nftContract,
    //     uint256 tokenId,
    //     address owner,
    //     bool burned,
    //     bool imprinted,
    //     bool unlocked,
    //     bool copy
    // );
    //这是平台铸造合约地址,需要根据实际数据调整
    const address = store.state.address
    let contract = new eth.Contract(MosaiqueV1, address)
    return contract.methods.getNftInfo(nftMID).call()
}

/**
 * 查询NFTMID
 * @param {*} nftContract nft合约地址
 * @param {*} tokenId nft tokenId
 * @returns 
 */
export async function getNftMID (nftContract,tokenId) {
    // returns (bytes32 nftMID);
    //这是平台铸造合约地址,需要根据实际数据调整
    const address = store.state.address
    let contract = new eth.Contract(MosaiqueV1, address)
    return contract.methods.getNftMID(nftContract,tokenId).call()
}




  