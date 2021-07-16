<template>
  <Navigation />
  <div id="landing">
    <ModalWrapper />
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
import ModalWrapper from "./ModalWrapper.vue";

export default {
  name: "Landing",
  data() {
    return {};
  },
  components: {
    Navigation,
    ModalWrapper,
    Top,
    MapWrapper,
    HowTo,
    Footer,
  },
};
</script>

<style scoped></style>
