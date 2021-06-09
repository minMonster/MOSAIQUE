const state = {
  isMobile: false,
  domWidth: 1200
}

const mutations = {
  SET_MOBILE(state, payload) {
    state.isMobile = payload
  },
  SET_DOM_WIDTH(state, payload) {
    state.domWidth = payload
  }
}

const actions = {
  checkMobile({ commit }) {
    const domWidth = document.documentElement.getBoundingClientRect().width
    commit('SET_MOBILE', domWidth < 1090)
    commit('SET_DOM_WIDTH', domWidth)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
