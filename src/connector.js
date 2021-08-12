import store from '@/store'

export const rpcUrls = {
  1: 'http://94.74.87.188:8545'
}
// export const web3 = new Web3(window.ethereum)
// export const eth = web3.eth

export const web3 = new window.Web3(window.ethereum || rpcUrls['1'])
export const eth = web3.eth

export async function initConnect() {
  // console.log(store)
  // store.dispatch('walletAccount/getUserAddress')
}

initConnect()

export default {
  web3, eth, initConnect
}
