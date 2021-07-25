<template lang="">
  <div class="map-wrapper">
    <div class="header"><span class="title">Map of Souls</span></div>
    <MglMap :accessToken="mapboxToken" :mapStyle="mapboxStyle" @load="onMapLoaded"/>
    <template v-for="marker in markers" key="marker.id">
       <MglMarker :coordinates="marker.coordinates" color="blue" />
    </template>
    <MarkerTooltip/>
  </div>
</template>
<script>
import "mapbox-gl/dist/mapbox-gl.css";
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";
import mapApi from "../api/map.js";
import { mapboxStyle, mapboxToken } from "../constants.js";
import MarkerTooltip from "./MarkerTooltip.vue";

export default {
  name: "MapWrapper",
  components: {
    MglMap,
    MarkerTooltip,
  },
  data() {
    return {
      markers: [{coordinates: [31,31]}],
      // map: null,
      mapboxToken,
      mapboxStyle,
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  // mounted() {
  //   mapboxgl.accessToken = mapboxToken;
  //   const map = new mapboxgl.Map({
  //     container: "Mapbox1",
  //     style: mapboxStyle,
  //     center: [-3, 36], // starting position [lng, lat]
  //     zoom: 6, // starting zoom
  //   });
  //   this.map = map;
  //   this.getMarkers();
  // },
  methods: {
    async onMapLoad(event) {
      // Here we cathing 'load' map event
      const asyncActions = event.component.actions;

      const newParams = await asyncActions.flyTo({
        center: [30, 30],
        zoom: 9,
        speed: 1,
      });
      console.log(newParams);
      /* => {
              center: [30, 30],
              zoom: 9,
              bearing: 9,
              pitch: 7
            }
      */
    },
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
