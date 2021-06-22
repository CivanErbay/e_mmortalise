<template>
  <Landing />
  <utils />
</template>

<script>
import Landing from "./components/Landing.vue";
import utils from "./utils/utils.vue";
export default {
  name: "App",
  components: {
    Landing,
    utils
  },
};
</script>

<style lang="scss">
@import "./styles/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-font-color;
}

body {
  margin: 0;
  padding: 0;
}
</style>
