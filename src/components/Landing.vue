<template>
  <Navigation />
  <Top />
  <MapWrapper />
  <HowTo />
  <Footer />
</template>

<script>
import Navigation from "./Navigation.vue";
import Top from "./Top.vue";
import MapWrapper from "./MapWrapper.vue";
import HowTo from "./HowTo.vue";
import Footer from "./Footer.vue";

export default {
  name: "Landing",
  components: {
    Navigation,
    Top,
    MapWrapper,
    HowTo,
    Footer,
  },
};
</script>

<style scoped>
</style>
