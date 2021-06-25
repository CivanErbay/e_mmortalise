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
      <button @click="triggerForm('login')" class="btn-primary">
        Log In
      </button>
      <button @click="triggerForm('register')" class="btn-primary">Sign Up</button>
    </div>
    <LoginForm v-if="activeLogin" />
    <RegisterForm v-if="activeRegister" />
  </div>
</template>

<script>
import MobileCheck from "../utils/mobileCheck";
import BlurTrigger from "../utils/blurBackground";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";

export default {
  name: "Navigation",
  data() {
    return {
      activeLogin: false,
      activeRegister: false,
    };
  },
  methods: {
    triggerForm(form) {
      if (this.activeLogin || this.activeRegister) {
        this.deactivateBlur();
        form == "login"
          ? (this.activeLogin = false)
          : (this.activeRegister = false);
      } else {
        this.activateBlur();
        form == "login"
          ? (this.activeLogin = true)
          : (this.activeRegister = true);
      }
    },
  },
  components: { LoginForm, RegisterForm },
  mixins: [MobileCheck, BlurTrigger],
  mounted() {
    this.$store.watch(
      (state) => state.closeAllModal,
      (value) => {
        if (value == true) {
          this.activeLogin = false;
          this.activeRegister = false;
          this.$store.commit("closeWindow", false);
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
