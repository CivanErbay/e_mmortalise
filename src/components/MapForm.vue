<template>
  <div class="register-form form">
    <span>Choose a place</span>
    <span>Double click to choose a place</span>
    <div id="Mapbox2"></div>
    <span>Undo</span>
    <button class="btn-primary" @click="step++">Next</button>
  </div>

  <div class="third-step" v-show="step == 3">
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
  </div>
</template>

<script>
export default {
  name: "MemoryForm",
  data() {
    return {
      marker: null,
    };
  },
  methods: {
    setupMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYWxpYW5hY29uZGEiLCJhIjoiY2tucHh0aHF0MW5qcDJucHIyeW1ub2Q2MyJ9.lFmj8JXfO-0usB2mTTGMdw";
      const map = new mapboxgl.Map({
        container: "Mapbox2",
        style: mapboxStyle,
        center: [20, 40], // starting position [lng, lat]
        zoom: 2, // starting zoom
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#Mapbox2 {
  margin: auto;
  transform: scale(1.75);
  width: 100%;
  height: 400px;
  margin-bottom: 1rem;

  .mapboxgl-canvas {
    position: absolute;
    top: 100px;
  }
}
</style>