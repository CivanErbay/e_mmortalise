<template>
  <div class="register-form form">
    <span>Back</span>
    <span>Click to choose a place</span>
    <div id="Mapbox2"></div>
    <span>Undo</span>
    <button class="btn-primary" :disabled="!marker" @click="handleNext">
      Next
    </button>
  </div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import { mapboxStyle, mapboxToken } from "../../constants.js";
import { modalNamespace } from "../../constants";
import mapboxgl from "mapbox-gl";

export default {
  name: "MapForm",
  data() {
    return {
      marker: null,
    };
  },
  mounted() {
    this.setupMap();
    this.$store.commit("newMemory");
  },
  methods: {
    setupMap() {
      mapboxgl.accessToken = mapboxToken;
      this.map = new mapboxgl.Map({
        container: "Mapbox2",
        style: mapboxStyle,
        center: [20, 40], // starting position [lng, lat]
        zoom: 2, // starting zoom
      });
      this.map.on("click", this.add_marker.bind(this));
    },
    handleNext() {
      if (!this.marker) return;
      this.$store.commit("editMemory", { marker: this.marker.getLngLat() });
      this.$store.commit("setModal", modalNamespace.PERSON_FORM);
    },
    add_marker(event) {
      if (!this.marker) {
        const markerEl = document.createElement("div");
        markerEl.className = "marker";
        this.marker = new mapboxgl.Marker(markerEl);
      }
      const coordinates = event.lngLat;
      this.marker.setLngLat(coordinates).addTo(this.map);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/form.scss";
@import "../../styles/map.scss";

#Mapbox2 {
  margin: 1rem auto;
  //   transform: scale(1.75);
  width: 100%;
  height: 500px;
  margin-bottom: 1rem;

  .mapboxgl-canvas {
    position: absolute;
    top: 100px;
  }
}
</style>
