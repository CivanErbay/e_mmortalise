<template lang="">
    <div v-if="!$store.state.isMobile" class="footer">
        <button class="btn-primary">About</button>
        <button class="btn-primary">Contact Us</button>
        <button class="btn-primary">Privacy Policy</button>
        <button class="btn-primary">Terms & Conditions</button>
    </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.footer {
  height: 80px;
  padding: 30px 60px;
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
}
</style>