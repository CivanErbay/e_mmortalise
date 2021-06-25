import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      closeAllModal: false,
    };
  },
  mutations: {
    closeWindow(state, payload) {
      state.closeAllModal = payload;
    },
  },
});