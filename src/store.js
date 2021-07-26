import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentModal: null,
      isAuthenticated: false,
      userModel: null,
      creatingMemory: {},
      selectedMarker: null,
      memories: null,
    };
  },
  mutations: {
    setModal(state, payload) {
      state.currentModal = payload;
    },
    authenticate(state, payload) {
      state.isAuthenticated = payload;
    },
    setUserModel(state, payload) {
      state.userModel = payload;
    },
    editMemory(state, payload) {
      state.creatingMemory = { ...state.creatingMemory, ...payload };
    },
    newMemory(state) {
      state.creatingMemory = {};
    },
    selectMarker(state, payload) {
      state.selectedMarker = payload;
    },
    setMemories(state, payload) {
      state.memories = payload;
    },
    addMemory(state, payload) {
      state.memories = [...state.memories, payload];
    },
  },
});
