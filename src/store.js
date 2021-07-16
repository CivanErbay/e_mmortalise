import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentModal: null,
      isAuthenticated: false,
    };
  },
  mutations: {
    setModal(state, payload) {
      state.currentModal = payload;
    },
    authenticate(state, payload) {
      state.isAuthenticated = payload;
    },
  },
});
