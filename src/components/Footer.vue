<template lang="">
  <div class="footer">
    <span v-if="!isMobile"></span>
    <p class="owner">&copy; 2021 Alina Ernesti. All Rights Reserved</p>
    <button v-if="!isMobile" class="btn-primary" @click="handleImprint">
      Imprint
    </button>
  </div>
</template>
<script>
import MobileCheck from "../utils/mobileCheck";
export default {
  name: "Footer",
  mixins: [MobileCheck],
  methods: {
    handleImprint() {
      // TODO
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.footer {
  height: 80px;
  padding: 0 60px;
/*   display: grid;
  grid-template-columns: 10% auto 10%; */
  justify-items: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @include breakpoint(medium) {
    display: grid;
    grid-template-columns: 10% auto 10%;
  }

  button {
    color: $secondary-font-color;
    background-color: $primary-background-color;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}
</style>
