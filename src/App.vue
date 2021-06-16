<template>
  <Landing />
</template>

<script>
import Landing from "./components/Landing.vue";
export default {
  name: "App",
  components: {
    Landing,
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
