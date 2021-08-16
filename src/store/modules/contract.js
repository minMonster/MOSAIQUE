import { eth } from '@/connector'

const state = {
  // 平台自己的合约
  contractAddress: '0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21',
  // 收录过来的合约
  CollectionContract: {
    bull721: '0x2B643390fE2BeD273E7989cADb856389034bE4cd',
    mosaique: '0x3700C29CC19e333CB5C8CBC26e8aeAE9cBD40564',
    mosaique721: '0x37d3bC83f09D78De7833f4b6A22389D6c2402dF8'
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
