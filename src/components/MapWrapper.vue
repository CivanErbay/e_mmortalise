<template lang="">
  <div class="map-wrapper">
    <div class="header"><span class="title">Map of Souls</span></div>
    <div v-if="inactiveMap" @click="inactiveMap = false" class="activate-layer">
      <button class="btn-primary btn-primary--inverted border-blue"> Click on one of the dots to open a memorable site</button>
    </div>
    <div :class="{ 'inactive-map': inactiveMap }">
      <div id="Mapbox1">
        <MarkerTooltip />
      </div>
    </div>
  </div>
</template>
<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import usersApi from "../api/users.js";
import { mapboxStyle, mapboxToken } from "../constants.js";
import MarkerTooltip from "./MarkerTooltip.vue";

export default {
  name: "MapWrapper",
  components: { MarkerTooltip },
  data() {
    return {
      inactiveMap: true,
      markerIds: [],
    };
  },
  mounted() {
    mapboxgl.accessToken = mapboxToken;
    const map = new mapboxgl.Map({
      container: "Mapbox1",
      style: mapboxStyle,
      center: [15, 37], // starting position [lng, lat]
      zoom: 3.5, // starting zoom
    });
    this.map = map;
    this.getMemories();
  },
  methods: {
    /*  getMarkers() {
      mapApi.getMarkers().then((markers) => {
        this.markers = markers;
      });
    }, */
    getMemories() {
      usersApi.getAllMemories().then((memories) => {
        this.$store.commit("setMemories", memories);
      });
    },
  },
  computed: {
    memories() {
      return this.$store.state.memories;
    },
  },
  watch: {
    memories(memories) {
      memories.forEach((memory) => {
        const {
          firstName,
          lastName,
          dateOfBirth,
          dateOfMissing,
          hometown,
          country,
          imageData,
          description,
          user_id,
          memory_id,
        } = memory;

        // don't make markers if they already exist
        if (this.markerIds.includes(memory_id)) return;

        // Create a DOM element for each marker.
        const markerEl = document.createElement("div");
        markerEl.className = "marker interactive";

        const mapboxMarker = new mapboxgl.Marker(markerEl)
          .setLngLat(memory.marker)
          .addTo(this.map);

        mapboxMarker.getElement().addEventListener("click", async () => {
          const publishedBy = await usersApi.getUserById(user_id);

          // top
          let popupContent = '<div class="top">';
          popupContent += `<h3>${firstName} ${lastName || ""}</h3>`;
          popupContent += `<p>${
            dateOfBirth
              ? new Date(dateOfBirth).toLocaleDateString("en-GB")
              : "unknown birth date"
          } - ${
            dateOfMissing
              ? new Date(dateOfMissing).toLocaleDateString("en-GB")
              : "unknown last date"
          }</p>`;
          popupContent += `<p>From <span class="underline">${
            hometown || "unknown"
          }</span> in <span class="underline">${
            country || "unknown"
          }</span></p>`;
          popupContent += "</div>";
          // image
          if (imageData)
            popupContent += `<div class="img-wrapper"><img src="${imageData}" alt="Memory Image" /></div>`;
          // description
          popupContent += `<div class="description"><p>${description}</p></div>`;
          // Footer
          popupContent += `<div class="footer"><p>Published by <span class="underline">${publishedBy.firstName} ${publishedBy.lastName}</span></p></div>`;

          // create the popup
          var popup = new mapboxgl.Popup({
            offset: 0,
            focusAfterOpen: true,
            anchor: "center", 
            className: "popup",
            maxWidth: 500,
          }).setHTML(popupContent);

          mapboxMarker
            .setPopup(popup) // sets a popup on this marker
            .addTo(this.map);
        });

        this.markerIds.push(memory_id);
      });
    },
  },
};
</script>
<style lang="scss">
@import "../styles/variables";
@import "../styles/map";

.map-wrapper {
  position: relative;
  margin-top: 2rem;
  z-index: 5;

  .activate-layer {
    position: absolute;
    left: 0;
    right: 0;
   /*  top: 50%; */
    font-family: "FontLightItalic";
    z-index: 3;
    font-size: 28px;
    padding: 300px 0 200px;
    cursor: pointer;

    @include breakpoint(large) {
      top: 25%;
      padding: 200px 0;
      font-size: 58px;
    }
  }

  .header {
    position: relative;
    // top: 100px;
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
    height: 615px;
    margin-bottom: 1rem;
    position: relative;
    border: 2px solid;
    max-width: 1200px;
  }

  .inactive-map {
    filter: blur(3px);
    pointer-events: none;
    user-select: none;
  }
}
</style>
