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
        this.markers = response;
      });
    },
  },
  watch: {
    markers(markers) {
      markers.forEach((marker) => {
        const mapboxMarker = new mapboxgl.Marker({ color: "blue", rotation: 0 })
          .setLngLat(marker.position)
          .addTo(this.map);
        mapboxMarker.getElement().addEventListener("click", () => {
          this.$store.commit("selectMarker", marker);
          //
          // create the popup
          var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h1>ID: ${marker.marker_id}</h1> <p>LatLon: ${marker.position}</p>`
          );

          // create DOM element for the marker
          var el = document.createElement("div");
          el.id = "marker";

          mapboxMarker
            .setPopup(popup) // sets a popup on this marker
            .addTo(this.map);
        });
        mapboxMarker.getElement().style.cursor = "pointer";
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

  #marker {
    display: flex;
    flex-direction: column;
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
