<template>
  <div class="navigation">
    <img
      class="navigation--headline"
      src="./../assets/Logo_300ppi_blau.png"
      alt=""
    />
    <img
      v-if="isMobile && !triggerMobileMenu"
      class="burger-menu"
      src="./../assets/menu.svg"
      alt=""
      @click="handleMobileMenu"
    />
    <div
      v-else-if="isMobile && triggerMobileMenu && !isAuthenticated"
      class="navigation--button-wrapper"
    >
      <button @click="triggerForm(modalNamespace.LOGIN)" class="btn-primary">
        Log In
      </button>
      <button @click="triggerForm(modalNamespace.REGISTER)" class="btn-primary">
        Sign Up
      </button>
    </div>
    <div
      v-else-if="!isMobile && !isAuthenticated"
      class="navigation--button-wrapper"
    >
      <button @click="triggerForm(modalNamespace.LOGIN)" class="btn-primary">
        Log In
      </button>
      <button @click="triggerForm(modalNamespace.REGISTER)" class="btn-primary">
        Sign Up
      </button>
    </div>

    <div
      v-else-if="!isMobile && isAuthenticated"
      class="navigation--button-wrapper"
    >
      <button @click="triggerForm(modalNamespace.FORM_1)" class="btn-primary">
        Create Memory
      </button>
      <button @click="handleLogout" class="btn-primary">
        {{ `Logout (${userModel?.firstName})` }}
      </button>
    </div>
  </div>
</template>

<script>
import MobileCheck from "../utils/mobileCheck";
import { modalNamespace } from "./../constants";

export default {
  name: "Navigation",
  data() {
    return {
      triggerMobileMenu: false,
      modalNamespace,
    };
  },
  mixins: [MobileCheck],
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    userModel() {
      return this.$store.state.userModel;
    },
  },
  methods: {
    triggerForm(form) {
      this.$store.commit("setModal", form);
    },
    handleLogout() {
      this.$store.commit("authenticate", false);
      this.$store.commit("setUserModel", null);
    },
    handleMobileMenu() {
      this.$store.commit("setModal", blur);
      this.triggerMobileMenu = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.navigation {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 3px $primary-background-color solid;

  &--button-wrapper {
    z-index: 2;
  }

  &--headline {
    height: 30px;
  }

  .burger-menu {
    height: 40px;
    position: absolute;
    top: 22px;
    right: 25px;
  }

  &--button-wrapper {
    button {
      margin-right: 30px;
    }
  }
}
</style>
