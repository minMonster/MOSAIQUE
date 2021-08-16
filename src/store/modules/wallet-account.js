import { eth } from '@/connector'
import * as api from '@/service/api'

const state = {
  // 自己钱包账户的地址
  userAddress: '',
  eth: '',
  formatEth: '',
  // 用户信息
  user_nickname: sessionStorage.getItem('user_nickname'),
  user_introduce: sessionStorage.getItem('user_introduce'),
  user_avatar: sessionStorage.getItem('user_avatar'),
  // 修改用户信息必须携带此token
  user_token: sessionStorage.getItem('user_token')
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
  },
  // 设置用户 - Token
  set_user_token(state, token) {
    state.user_token = token
    sessionStorage.setItem('user_token', token)
  },
  // 设置用户信息 - 头像
  set_user_avatar(state, url) {
    state.user_avatar = url || ''
    sessionStorage.setItem('user_avatar', url || '')
  },
  // 设置用户信息 - 昵称与介绍
  set_user_userInfo(state, data) {
    state.user_nickname = data.name || ''
    state.user_introduce = data.introduction || ''
    sessionStorage.setItem('user_nickname', data.name || '')
    sessionStorage.setItem('user_introduce', data.introduction || '')
  },
  // 清除用户信息
  clear_user_info(state) {
    state.user_avatar = ''
    state.user_nickname = ''
    state.user_introduce = ''
    state.user_token = ''
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
  _getUserAddress({ commit }) {
    console.log('getUserAddress')
    return eth.getAccounts().then(accounts => {
      console.log(accounts, 'accounts')
      if (accounts && accounts.length > 0) {
        commit('set_user_address', accounts[0])
      }
    })
  },
  // 获取用户信息（头像、昵称、介绍）
  _getUserInfo({ commit, state }) {
    const params = {
      address: [state.userAddress]
    }
    api.getUserInfo(JSON.stringify(params)).then(res => {
      console.log(res.data)
      if (res.data.addressInfo) {
        const userInfo = res.data.addressInfo
        commit('set_user_avatar', userInfo[0].images)
        commit('set_user_userInfo', userInfo[0])
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
