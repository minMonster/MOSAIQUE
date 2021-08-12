import { eth } from '@/connector'

const state = {
  // 平台自己的合约
  contractAddress: '0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21',
  // 收录过来的合约
  CollectionContract: {
    bull721: '0x2B643390fE2BeD273E7989cADb856389034bE4cd',
    mosaique: '0x6c198aa7D4817c62dE7A338316769Be784167646',
    mosaique721: '0x7490c0400b8f504101F296A3e9392E554f305CD3'
  }

}

const mutations = {
}
const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
