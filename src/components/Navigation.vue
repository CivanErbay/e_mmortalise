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
    <div v-else class="navigation--button-wrapper">
      <button @click="activateLoginForm" class="btn-primary">Log In</button>
      <button class="btn-primary">Sign Up</button>
    </div>
    <LoginForm v-if="activeLogin" />
  </div>
</template>

<script>
import MobileCheck from "../utils/mobileCheck";
import BlurTrigger from "../utils/blurBackground";
import LoginForm from "./LoginForm.vue";

export default {
  name: "Navigation",
  data() {
    return {
      activeLogin: false,
    };
  },
  methods: {
    activateLoginForm() {
      if (this.activeBlur && this.activeLogin) {
        this.deactivateBlur();
        this.activeLogin = false;
      } else {
        this.activateBlur();
        this.activeLogin = true;
      }
    },
  },
  components: { LoginForm },
  mixins: [MobileCheck, BlurTrigger],
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
