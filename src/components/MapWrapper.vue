<template lang="">
    <div class='map-wrapper'>
        <div class="header"><span class="title">Map of Souls</span></div>
        <div id="Mapbox"></div>
        
        <div class="footer"><span>Click on one of the dots to open a memorable site</span></div>
    </div>
</template>
<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import mapApi from "../api/map.js";

export default {
  name: "MapWrapper",
  data() {
    return {
      markers: [],
      map: null,
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2lrb211cm8iLCJhIjoiY2twd3gzMWR3MDBmeTJwcWNuNTcyOHh3NiJ9.l5ICX_-sizKBmCIpIbqryg";
    const map = new mapboxgl.Map({
      container: "Mapbox",
      style: "mapbox://styles/kikomuro/ckpwxbohi2bfa18q6zoeedvlo",
      center: [-3, 36], // starting position [lng, lat]
      zoom: 6, // starting zoom
    });
    this.map = map;
    this.getMarkers();
  },
  methods: {
    getMarkers() {
      mapApi.getMarkers().then((markers) => (this.markers = markers));
    },
  },
  watch: {
    markers(markers) {
      markers.forEach((marker) => {
        new mapboxgl.Marker({ color: "blue", rotation: 0 })
          .setLngLat(marker)
          .addTo(this.map);
      });
    },
  },
};
</script>
<style lang="scss">
@import "../styles/variables";

.map-wrapper {
  min-height: 200px;
  padding: 2rem;

  .header {
   margin: 45px 0 30px
  }

  .title {
    font-family: 'FontBigCaslon';
    color: $primary-background-color;
    font-size: 48px;
  }

  #Mapbox {
    margin: auto;
    width: 90%;
    height: 500px;
    margin-bottom: 1rem;
  }
}
</style>