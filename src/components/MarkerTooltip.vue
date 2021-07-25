<template>
  <div v-if="currentMarker" id="MarkerTooltip">
    <p class="title">{{ currentMarker.userName }}</p>
    <p class="description">{{ currentMarker.description }}</p>
  </div>
</template>

<script>
export default {
  name: "MarkerTooltip",
  setup() {
    return {};
  },
  computed: {
    currentMarker() {
      return this.$store.state.currentMarker;
    },
  },
};
</script>

<style lang="scss" scoped>
.MarkerTooltip {
  height: 100px;
  width: 100px;
}
</style>