import { eth } from '@/connector'

const state = {
  // 平台自己的合约
  contractAddress: '0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21',
  // 收录过来的合约
  CollectionContract: {
    bull721: '0x2B643390fE2BeD273E7989cADb856389034bE4cd',
    mosaique: '0x3b842Aac0b932D546ed6C87895350EaeF0bEbcc3',
    mosaique721: '0x05D89769A066549115b1B4408bFf899D2737F30b'
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
