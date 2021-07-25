<template lang="">
  <div class="map-wrapper">
    <div class="header"><span class="title">Map of Souls</span></div>
    <div id="Mapbox1">
      <MarkerTooltip/>
    </div>
  </div>
</template>
<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import mapApi from "../api/map.js";
import { mapboxStyle, mapboxToken } from "../constants.js";
import MarkerTooltip from "./MarkerTooltip.vue";

export default {
  name: "MapWrapper",
  components: { MarkerTooltip },
  data() {
    return {
      markers: [],
      map: null,
    };
  },
  mounted() {
    mapboxgl.accessToken = mapboxToken;
    const map = new mapboxgl.Map({
      container: "Mapbox1",
      style: mapboxStyle,
      center: [-3, 36], // starting position [lng, lat]
      zoom: 6, // starting zoom
    });
    this.map = map;
    this.getMarkers();
  },
  methods: {
    /*  getMarkers() {
      mapApi.getMarkers().then((markers) => {
        this.markers = markers;
      });
    }, */
    getMarkers() {
      mapApi.getAllMarkers().then((response) => {
        const markerArray = response.map((val) => {
          return val.position;
        });
        this.markers = markerArray;
      });
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
  margin-top: -100px;

  .header {
    position: relative;
    top: 100px;
    padding: 30px 0;
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

  #Mapbox1 {
    margin: auto;
    width: 90%;
    height: 500px;
    margin-bottom: 1rem;
    position: relative;
    top: 85px;
    border: 2px solid;
  }
}
</style>
