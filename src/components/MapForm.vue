<template>
  <div class="register-form form">
    <span>Back</span>
    <span>Click to choose a place</span>
    <div id="Mapbox2"></div>
    <span>Undo</span>
    <button class="btn-primary" @click="handleNext">Next</button>
  </div>

  <!-- <div class="third-step">
    <div class="image-upload">
      <form
        method="post"
        enctype="multipart/form-data"
        action="/api/v1/memories/uploadImage"
      >
        <input type="file" name="imageFile" />
        <input type="submit" value="Upload" />
      </form>
    </div>
    <button class="btn-primary" @click="TODO">Submit</button>
  </div> -->
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import { mapboxStyle, mapboxToken } from "../constants.js";
import { modalNamespace } from "../constants";
import mapApi from "../api/map.js";
import mapboxgl from "mapbox-gl";

export default {
  name: "MapForm",
  data() {
    return {
      marker: new mapboxgl.Marker(),
      map: null,
    };
  },
  mounted() {
    this.setupMap();
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
      this.$store.commit("editMemory", { marker: this.marker.getLngLat() });

      this.$store.commit("setModal", modalNamespace.IMAGE_UPLOAD);
    },
    add_marker(event) {
      var coordinates = event.lngLat;
      this.marker.setLngLat(coordinates).addTo(this.map);
      console.log(this.marker.getLngLat());
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/form.scss";

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