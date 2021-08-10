import * as contract from '@/contract'

const state = {
  userNfts: []
}

const mutations = {
  set_user_nft(state, payload) {
    state.userNfts = payload
  }
}
const actions = {
  async getERC721Balance({ commit, rootState }) {
    const nfts = await contract.getERC721Balance(
      rootState.contract.contractAddress,
      rootState.walletAccount.userAddress
    )
    commit('set_user_nft', nfts)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
