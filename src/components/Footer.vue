<template lang="">
  <div v-if="!isMobile" class="footer">
    <p class="owner">&copy; 2021 Alina Ernesti. All Rights Reserved</p>
    <button class="btn-primary">Imprint</button>
  </div>
</template>
<script>
import MobileCheck from "../utils/mobileCheck";
export default {
  name: "Footer",
  mixins: [MobileCheck],
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.footer {
  height: 80px;
  padding: 0 60px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  button {
    color: $secondary-font-color;
    background-color: $primary-background-color;

    &:not(:first-child) {
      margin-left: 30px;
    }
  }

  .owner {
    position: absolute;
    left: 0;
    right: 0;
  }
}
</style>
