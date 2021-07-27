import { chainConfigs, mainCoins } from '@/config'
console.log(chainConfigs)
import store from '@/store'
import Web3 from 'web3'

export const rpcUrls = {
  1: 'http://94.74.87.188:8545'
}
export const web3 = new Web3(window.ethereum)
export const eth = web3.eth

// 切换链
export function switchChain(data) {
  const ethereum = window.ethereum
  if (!ethereum) return
  if (!data) return
  ethereum.request({
    method: 'wallet_addEthereumChain',
    params: data
  }).then(res => {

  }).catch(err => {
    console.error(err)
  })
}
const chainIds = chainConfigs.map(item => {
  return item[0].chainId
})
const chainSymbols = chainConfigs.map(item => {
  return item[0].nativeCurrency.symbol
})
const chainNames = chainConfigs.map(item => {
  return item[0].chainName
})
export function initConnect() {
  let symbol = ''
  let chainName = ''; let txBaseUrl = ''; let addressBaseUrl = ''
  eth.getChainId().then(chainId => {
    if ((parseInt(chainId) == parseInt(chainIds[0])) || (parseInt(chainId) == parseInt(chainIds[1]))) {
      console.log('chainid>>>>>>>>>>>>>', chainId, chainConfigs)
      chainConfigs.forEach(item => {
        item = item[0]
        if (parseInt(chainId) == parseInt(item.chainId)) {
          symbol = item.nativeCurrency.symbol
          chainName = item.chainName
        }
      })
      mainCoins.forEach(item => {
        if (symbol == item.symbol) {
          txBaseUrl = item.txBaseUrl
          addressBaseUrl = item.addressBaseUrl
        }
      })
      if (chainId == 3388) {
        chainId = 128
      }
      console.log(symbol)
      store.dispatch('getAddress')
      store.commit('CHANGE_CHAINID', chainId)
      store.commit('CHANGE_SYMBOL', symbol)
      store.commit('CHANGE_CHAINNAME', chainName)
      store.commit('SET_BASE_URL', {
        txBaseUrl,
        addressBaseUrl
      })
    } else {
      store.commit('setAddress', 'Wrong network')
      // switchChain(chainConfigs[1])
      store.commit('CHANGE_CHAINID', '')
    }
  })
}

initConnect()

