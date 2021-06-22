import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      isMobile: false
    }
  },
  mutations: {
    changeIsMobile (state, bool) {
      state.isMobile = bool;
    }
  }
})