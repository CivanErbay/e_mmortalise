<template>
  <div id="modalBackground" v-if="currentModal" @click="closeAllModals"></div>
  <template v-if="!isAuthenticated">
    <LoginForm v-if="currentModal === modalNamespace.LOGIN" />
    <RegisterForm v-if="currentModal === modalNamespace.REGISTER" />
  </template>
  <template v-if="isAuthenticated">
    <MemoryForm v-if="currentModal === modalNamespace.MEMORY_FORM" />
    <DescriptionForm v-if="currentModal === modalNamespace.DESCRIPTION_FORM" />
    <MapForm v-if="currentModal === modalNamespace.MAP_FORM" />
    <ImageForm v-if="currentModal === modalNamespace.IMAGE_FORM" />
  </template>
</template>

<script>
import { modalNamespace } from "./../constants";
import LoginForm from "./Forms/LoginForm.vue";
import RegisterForm from "./Forms/RegisterForm.vue";
import MemoryForm from "./Forms/PersonForm.vue";
import MapForm from "./MapForm.vue";
import ImageForm from "./Forms/ImageForm.vue";
import DescriptionForm from "./Forms/DescriptionForm.vue";

export default {
  name: "ModalWrapper",
  data() {
    return {
      modalNamespace,
    };
  },
  components: {
    LoginForm,
    RegisterForm,
    MemoryForm,
    MapForm,
    ImageForm,
    DescriptionForm,
  },
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
  backdrop-filter: blur(5px);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  top: 0;
}
</style>
