<template>
  <div class="fixed-wrapper">
    <div class="navigation">
      <img
        @click="reloadPage"
        class="navigation--headline"
        src="./../assets/Logo_300ppi_blau.png"
        alt=""
      />
      <img
        v-if="isMobile"
        class="burger-menu"
        src="./../assets/menu.svg"
        alt=""
        @click="toggleMobileMenu"
      />
      <div
        v-if="isMobile && !isAuthenticated && isOpenModal && triggerMobileMenu && isOpenModal != 'REGISTER'"
        class="navigation--button-wrapper"
      >
        <button
          @click="triggerForm(modalNamespace.LOGIN)"
          class="btn-primary btn-primary--inverted"
        >
          Log In
        </button>
        <button
          @click="triggerForm(modalNamespace.REGISTER)"
          class="btn-primary btn-primary--inverted"
        >
          Sign Up
        </button>
        <button
          @click="triggerForm(modalNamespace.IMPRINT)"
          class="btn-primary btn-primary--inverted"
        >
          Imprint
        </button>
      </div>

      <div
        v-if="
          isMobile &&
          isAuthenticated &&
          isOpenModal &&
          triggerMobileMenu &&
          isOpenModal != 'MAP_FORM'
        "
        class="navigation--button-wrapper"
      >
        <button
          @click="triggerForm(modalNamespace.MAP_FORM)"
          class="btn-primary btn-primary--inverted"
        >
          {{ userModel.firstName }} {{ userModel.lastName }}
        </button>
        <button @click="handleLogout" class="btn-primary btn-primary--inverted">
          Logout
        </button>
        <button
          @click="triggerForm(modalNamespace.IMPRINT)"
          class="btn-primary btn-primary--inverted"
        >
          Imprint
        </button>
      </div>
      <div
        v-else-if="!isMobile && !isAuthenticated"
        class="navigation--button-wrapper"
      >
        <button @click="triggerForm(modalNamespace.LOGIN)" class="btn-primary">
          Log In
        </button>
        <button
          @click="triggerForm(modalNamespace.REGISTER)"
          class="btn-primary"
        >
          Sign Up
        </button>
      </div>

      <div
        v-else-if="!isMobile && isAuthenticated"
        class="navigation--button-wrapper"
      >
        <button
          @click="triggerForm(modalNamespace.MAP_FORM)"
          class="btn-primary btn-primary--inverted border-blue"
        >
          {{ userModel.firstName }} {{ userModel.lastName }}
        </button>
        <button @click="handleLogout" class="btn-primary">Logout</button>
      </div>
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
    isOpenModal() {
      return this.$store.state.currentModal;
    },
  },
  methods: {
    triggerForm(form) {
      this.$store.commit("setModal", form);
      this.triggerMobileMenu = false;
    },
    handleLogout() {
      this.$store.commit("authenticate", false);
      this.$store.commit("setUserModel", null);
    },
    toggleMobileMenu() {
      this.$store.commit("setModal", "mobileNavigation");
      this.triggerMobileMenu = true;
      console.log(this.isOpenModal);
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.fixed-wrapper {
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 25;
  background: $secondary-font-color;

  img {
    cursor: pointer;
  }

  .navigation {
    margin: 0 auto;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    max-width: 1200px;
    border-bottom: 3px $primary-background-color solid;

    &--headline {
      height: 30px;

      @include breakpoint(medium) {
        top: 5px;
        position: relative;
      }
    }

    .burger-menu {
      height: 40px;
      position: absolute;
      top: 22px;
      right: 25px;
    }

    &--button-wrapper {
      z-index: 3;
      position: absolute;
      flex-direction: column;
      display: flex;
      right: 15px;
      top: 100px;

      button {
        margin-top: 30px;
      }

      @include breakpoint(medium) {
        display: block;
        position: inherit;

        button {
          margin-right: 30px;
          margin-top: 0;
        }
      }
    }
  }
}
</style>
