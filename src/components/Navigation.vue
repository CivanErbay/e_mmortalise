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
      form == "logout"
        ? this.$store.commit("authenticate", false)
        : this.$store.commit("setModal", form);
    },
  },
  mounted() {
    this.$store.watch(
      (state) => state.isAuthenticated,
      (value) => {
        if (value) {
          this.activeRegister = false;
          this.activeLogin = false;
          this.$store.commit("setModal", null);
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
