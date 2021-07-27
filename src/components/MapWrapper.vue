<template lang="">
  <div class="map-wrapper">
    <div class="header"><span class="title">Map of Souls</span></div>
    <h3 v-if="inactiveMap" @click="inactiveMap = false" class="activate-layer">
      Click on one of the dots to open a memorable site
    </h3>
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
        // Create a DOM element for each marker.
        var markerEl = document.createElement("div");
        markerEl.className = "marker";

        const mapboxMarker = new mapboxgl.Marker(markerEl)
          .setLngLat(memory.marker)
          .addTo(this.map);
        mapboxMarker.getElement().addEventListener("click", async () => {
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
          } = memory;

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
            offset: 25,
            anchor: "left",
            className: "popup",
            maxWidth: 500,
          }).setHTML(popupContent);

          mapboxMarker
            .setPopup(popup) // sets a popup on this marker
            .addTo(this.map);
        });
      });
    },
  },
};
</script>
<style lang="scss">
@import "../styles/variables";

.map-wrapper {
  margin-top: -100px;
  position: relative;

  .activate-layer {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    font-family: "FontLightItalic";
    z-index: 3;
    font-size: 28px;
    padding: 100px 0;
    cursor: pointer;

    @include breakpoint(large) {
      top: 25%;
      padding: 200px 0;
      font-size: 58px;
    }
  }

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

  .marker {
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;

    border-radius: 50%;
    background-color: $primary-background-color;
    filter: blur(1px);
  }

  .popup {
    .mapboxgl-popup-content {
      background-image: linear-gradient(
        $primary-background-color,
        $secondary-font-color
      );
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2rem;

      width: 280px;
      min-height: 280px;

      border-radius: 4px;
      border: 2px solid $primary-font-color;

      p {
        margin: 0;
      }

      .underline {
        text-decoration: underline;
      }

      .top {
        color: $secondary-font-color;
        h3 {
          font-size: 1.5em;
        }
      }

      .img-wrapper {
        padding: 1rem 2rem;
        img {
          width: 100%;
          border: 2px solid $primary-font-color;
        }
      }

      .description {
        text-align: left;
        overflow-y: auto; //  TODO fancy caret
        max-height: 150px;
      }

      .footer {
        margin: 1.5rem 0 0 0;
      }
    }
  }

  #Mapbox1 {
    margin: auto;
    width: 90%;
    height: 615px;
    margin-bottom: 1rem;
    position: relative;
    top: 85px;
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
