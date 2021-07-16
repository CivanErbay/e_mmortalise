<template>
  <div class="navigation">
    <img
      class="navigation--headline"
      src="./../assets/Logo_300ppi_blau.png"
      alt=""
    />
    <img
      v-if="isMobile"
      class="burger-menu"
      src="./../assets/menu.png"
      alt=""
    />
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
      <button @click="triggerForm('logout')" class="btn-primary">Logout</button>
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
      activeLogin: false,
      activeRegister: false,
      activeCreateMemory: false,
      modalNamespace,
    };
  },
  mixins: [MobileCheck],
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
  methods: {
    triggerForm(form) {
      this.$store.commit("setModal", form);
      //   if (this.activeLogin || this.activeRegister) {
      //     this.deactivateBlur();
      //     form == "login"
      //       ? (this.activeLogin = false)
      //       : (this.activeRegister = false);
      //   } else if (!this.isAuthenticated) {
      //     this.activateBlur();
      //     form == "login"
      //       ? (this.activeLogin = true)
      //       : (this.activeRegister = true);
      //   } else if (this.isAuthenticated && form == "logout") {
      //     this.$store.commit("authenticate", false);
      //   } else if (this.isAuthenticated && form == "newMemory") {
      //     this.activateBlur();
      //     this.activeCreateMemory = true;
      //   }
    },
  },
  mounted() {
    this.$store.watch(
      (state) => state.closeAllModal,
      (value) => {
        if (value == true) {
          this.activeLogin = false;
          this.activeRegister = false;
          this.activeCreateMemory = false;
          this.$store.commit("closeWindow", false);
        }
      }
    );
    this.$store.watch(
      (state) => state.isAuthenticated,
      (value) => {
        if (value) {
          this.deactivateBlur();
          this.activeRegister = false;
          this.activeLogin = false;
        }
      }
    );
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

  &--headline {
    height: 30px;
  }

  .burger-menu {
    height: 25px;
    position: absolute;
    top: 19px;
    right: 27px;
  }

  &--button-wrapper {
    button {
      margin-right: 30px;
    }
  }
}
</style>
