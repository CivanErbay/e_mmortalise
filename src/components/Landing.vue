<template>
  <Navigation />
  <Top />
  <MapWrapper />
</template>

<script>
import Navigation from "./Navigation.vue";
import Top from "./Top.vue";
import MapWrapper from "./MapWrapper.vue";
export default {
  name: "Landing",
  components: {
    Navigation,
    Top,
    MapWrapper,
  },
};
</script>

<style scoped>
</style>
