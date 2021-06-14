<template lang="">
    <div class="footer">
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
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  button {
    padding: 0 1rem;
    color: $secondary-font-color;
    background-color: $primary-background-color;

    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
}
</style>