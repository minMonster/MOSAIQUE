import { eth } from '@/connector'

const state = {
  // 自己钱包账户的地址
  userAddress: '',
  eth: '',
  formatEth: ''
}

const mutations = {
  set_user_address(state, payload) {
    state.userAddress = payload
  },
  remove_user_address(state, payload) {
    state.userAddress = ''
  },
  set_user_eth(state, payload) {
    state.eth = payload
    state.formatEth = window.BigNumber(payload).toFormat(4)
  }
}
const actions = {
  getEth({ commit, state }) {
    console.log('getEth')

    return eth.getBalance(state.userAddress).then(res => {
      console.log(window.BigNumber(res).div(1000000000000000000), 'ethhh')
      commit('set_user_eth', window.BigNumber(res).div(1000000000000000000))
      return window.BigNumber(res).div(1000000000000000000)
    })
  },
  // 获取钱包用户的地址
  getUserAddress({ commit }) {
    console.log('getUserAddress')
    return eth.getAccounts().then(accounts => {
      console.log(accounts, 'accounts')
      if (accounts && accounts.length > 0) {
        commit('set_user_address', accounts[0])
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
