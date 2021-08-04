import { eth } from '@/connector'

const state = {
  isMobile: false,
  domWidth: 1200,
  zoomApp: 1,
  imageItems: [],
  '721Address': '0xcC445E7389Ca3fe659C565239cf0DF3864fa4A21'
}

const mutations = {
  SET_MOBILE(state, payload) {
    state.isMobile = payload
  },
  SET_DOM_WIDTH(state, payload) {
    state.domWidth = payload
  },
  SET_ZOOM_APP(state, payload) {
    state.zoomApp = payload
  },
  setAddress(state, payload) {
    state.waAddress = payload
  },
  SET_IMAGE_IMTES(state, payload) {
    state.imageItems = payload
  },
  set_user_address(state, payload) {
    state.user_address = payload
  }
}
const actions = {
  getAddress({ commit }) {
    return eth.getAccounts().then(accounts => {
      if (accounts && accounts.length > 0) {
        commit('set_user_address', accounts[0])
      }
    })
  },
  checkMobile({ commit }) {
    const domWidth = document.documentElement.getBoundingClientRect().width
    let zoomApp = 1
    if (domWidth > 2000) {
      zoomApp = 1.8
    } else if (domWidth > 1600) {
      zoomApp = 1.4
    } else if (domWidth > 1400) {
      zoomApp = 1.2
    }
    commit('SET_MOBILE', domWidth < 1090)
    commit('SET_DOM_WIDTH', domWidth)
    commit('SET_ZOOM_APP', zoomApp)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
