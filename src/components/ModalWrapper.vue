<template>
  <div id="modalBackground" v-if="currentModal" @click="closeAllModals"></div>
  <template v-if="!isAuthenticated">
    <LoginForm v-if="currentModal === modalNamespace.LOGIN" />
    <RegisterForm v-if="currentModal === modalNamespace.REGISTER" />
  </template>
  <template v-if="isAuthenticated">
    <MemoryForm v-if="currentModal === modalNamespace.FORM_1" />
    <!-- LOgout -->
  </template>
</template>

<script>
import { modalNamespace } from "./../constants";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import MemoryForm from "./MemoryForm.vue";

export default {
  name: "ModalWrapper",
  data() {
    return {
      modalNamespace,
    };
  },
  components: { LoginForm, RegisterForm, MemoryForm },
  computed: {
    currentModal() {
      return this.$store.state.currentModal;
    },
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
  methods: {
    closeAllModals() {
      this.$store.commit("setModal", null);
    },
  },
};
</script>

<style lang="scss" scoped>
#modalBackground {
  background-color: transparent;
  backdrop-filter: blur(10px);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  top: 0;
}
</style>
