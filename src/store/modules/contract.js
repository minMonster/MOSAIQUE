import { eth } from '@/connector'

const state = {
  // 平台自己的合约
  contractAddress: '0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21',
  // 收录过来的合约
  CollectionContract: {
    bull721: '0x2B643390fE2BeD273E7989cADb856389034bE4cd',
    mosaique: '0xCD4ee20B85dd044742a2Ef1627E09b371D785286',
    mosaique721: '0x8F5D7348b71208D1025F84250722F9d6C35f27e1'
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
