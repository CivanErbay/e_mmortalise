<template>
  <div class="navigation">
    <h1 class="navigation--headline">E_MMORTALISE</h1>
    <img class="burger-menu" src="./../assets/menu.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
.navigation {
  height: 50px;

  &--headline {
    font-size: 24px;
    color: #200e7e;
  }

  .burger-menu {
    height: 25px;
    position: absolute;
    top: 19px;
    right: 27px;
  }
}
</style>