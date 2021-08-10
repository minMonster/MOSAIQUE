import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import contract from './modules/contract'
import walletAccount from './modules/wallet-account'
import nft from './modules/nft'
import createPersiste from 'vue-savedata'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    contract,
    walletAccount,
    nft
  },
  plugins: [createPersiste()],
  getters
})

export default store
