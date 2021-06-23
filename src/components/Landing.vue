<template>
  <Navigation/>
  <div id="landing" @click="deactivateBlur">
    <Top />
    <MapWrapper />
    <HowTo />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Top from "./Top.vue";
import MapWrapper from "./MapWrapper.vue";
import HowTo from "./HowTo.vue";
import Footer from "./Footer.vue";
import BlurTrigger from "../utils/blurBackground";

export default {
  name: "Landing",
  data() {
    return {

    }
  },
  components: {
    Navigation,
    Top,
    MapWrapper,
    HowTo,
    Footer,
  },
  mixins: [BlurTrigger],
  methods: {
    closeAllModals() {
/*       this.deactivateBlur();
      this.shouldClose = true; */
    }
  }
};
</script>

<style scoped></style>
