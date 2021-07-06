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
    this.getMarkersCall();
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2lrb211cm8iLCJhIjoiY2twd3gzMWR3MDBmeTJwcWNuNTcyOHh3NiJ9.l5ICX_-sizKBmCIpIbqryg";
    const map = new mapboxgl.Map({
      container: "Mapbox",
      style: "mapbox://styles/kikomuro/ckpwxbohi2bfa18q6zoeedvlo",
      center: [-3, 36], // starting position [lng, lat]
      zoom: 6, // starting zoom
    });
    this.map = map;
    /* this.getMarkers();  */
  },
  methods: {
    getMarkers() {
      mapApi.getMarkers().then((markers) => {
        this.markers = markers;
        /*   console.log('origin', markers); */
        /*  console.log('this.markers2',this.markers); */
      });
    },
    getMarkersCall() {
      mapApi.getMarkersCall().then((response) => {
        const markerArray = response.map((val) => {
          return val.position;
        });
        /*   console.log('markerArray',markerArray); */
        this.markers = markerArray;
        /*   console.log('this.markers1',this.markers); */
      });
    },
  },
  watch: {
    markers(markers) {
      markers.forEach((marker) => {
        new mapboxgl.Marker({ color: "blue", rotation: 0 })
          .setLngLat(marker)
          .addTo(this.map);
          console.log(this.map);
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
