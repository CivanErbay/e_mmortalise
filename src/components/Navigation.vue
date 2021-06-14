<template>
  <div class="navigation">
    <img
      class="navigation--headline"
      src="./../assets/Logo_300ppi_blau.png"
      alt=""
    />
    <img class="burger-menu" src="./../assets/menu.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.navigation {
  &--headline {
    width: 40%;
  }

  .burger-menu {
    height: 25px;
    position: absolute;
    top: 19px;
    right: 27px;
  }
}
</style>