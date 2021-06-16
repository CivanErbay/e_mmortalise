<template lang="">
  <div class="map-wrapper">
    <div class="header"><span class="title">Map of Souls</span></div>
    <div id="Mapbox"></div>

    <div class="inner-wrapper">
      <img class="mouse-icon" src="./../assets/mouse.png" alt="" />
      <span>Click on one of the dots to open a memorable site</span>
    </div>
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
      "pk.eyJ1IjoiYWxpYW5hY29uZGEiLCJhIjoiY2tucHh0aHF0MW5qcDJucHIyeW1ub2Q2MyJ9.lFmj8JXfO-0usB2mTTGMdw";
    const map = new mapboxgl.Map({
      container: "Mapbox",
      style: "mapbox://styles/alianaconda/cknpxulrh0qfq18jspj506pzx",
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
    margin: 30px 0;
  }

  .title {
    font-family: "FontBigCaslon";
    color: $primary-background-color;
    font-size: 48px;
  }

  .inner-wrapper {
    padding: 30px 0;
    position: relative;
    width: auto;
    margin: 0 auto;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;

    @include breakpoint(large) {
      font-size: 26px;
    }

    .mouse-icon {
      height: 30px;

      @include breakpoint(large) {
        height: 50px;
      }
    }
  }

  #Mapbox {
    margin: auto;
    width: 90%;
    height: 500px;
    margin-bottom: 1rem;
  }
}
</style>
