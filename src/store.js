import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      closeAllModal: false,
      isAuthenticated: false,
    };
  },
  mutations: {
    closeWindow(state, payload) {
      state.closeAllModal = payload;
    },
    authenticate(state, payload) {
      state.isAuthenticated = payload;
    }
  },
});