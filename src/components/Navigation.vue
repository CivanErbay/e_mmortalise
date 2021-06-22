<template>
  <div class="navigation">
    <img
      class="navigation--headline"
      src="./../assets/Logo_300ppi_blau.png"
      alt=""
    />
    <img v-if="isMobile" class="burger-menu" src="./../assets/menu.png" alt="" />
    <div v-else class="navigation--button-wrapper">
        <button @click="increment" class="btn-primary">Log In</button>
        <button class="btn-primary">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    onResize(event) {
      window.innerWidth < 768 ? (this.isMobile = true) : false;
    },
   increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
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