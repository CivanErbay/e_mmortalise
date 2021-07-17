<template>
  <div class="register-form form">
    <div class="first-step" v-show="step == 1">
      <div class="form-wrapper">
        <h4>Create a place</h4>
        <h5 class="subheadline">What is your relationship?*</h5>
        <div class="checkbox-wrapper">
          <div class="checkbox">
            <input
              type="checkbox"
              id="mother"
              value="mother"
              v-model="checkedInput"
            />
            <label for="jack">Mother</label>
          </div>
          <div class="checkbox">
            <input
              type="checkbox"
              id="sister"
              value="sister"
              v-model="checkedInput"
            />
            <label for="john">Sister</label>
          </div>
          <div class="checkbox">
            <input
              type="checkbox"
              id="father"
              value="father"
              v-model="checkedInput"
            />
            <label for="john">Father</label>
          </div>
          <div class="checkbox">
            <input
              type="checkbox"
              id="friend"
              value="friend"
              v-model="checkedInput"
            />
            <label for="mike">Brother</label>
          </div>
          <div class="checkbox">
            <input
              type="checkbox"
              id="friend"
              value="friend"
              v-model="checkedInput"
            />
            <label for="mike">Relative</label>
          </div>
          <div class="checkbox">
            <input
              type="checkbox"
              id="friend"
              value="friend"
              v-model="checkedInput"
            />
            <label for="mike">Other</label>
          </div>
        </div>

        <h5 class="register-form--text">First Name of your loved one*</h5>
        <input class="input-100" v-model="firstName" />

        <h5 class="register-form--text">Last Name of your loved one*</h5>
        <input class="input-100" v-model="lastName" />

        <h5 class="register-form--text">Hometown*</h5>
        <input class="input-100" v-model="hometown" />

        <h5 class="register-form--text">Country*</h5>
        <input class="input-100" v-model="country" />
      </div>

      <div class="date-wrapper">
        <h5 class="register-form--text">Date of Birth</h5>
        <div class="birth-wrapper">
          <input class="input-30" placeholder="DD" v-model="country" /> /
          <input class="input-30" placeholder="MM" v-model="country" /> /
          <input class="input-30" placeholder="YY" v-model="country" />
        </div>
        <h5 class="register-form--text">Date of Passing or Missing</h5>
        <div class="passing-wrapper">
          <input class="input-30" placeholder="DD" v-model="country" /> /
          <input class="input-30" placeholder="MM" v-model="country" /> /
          <input class="input-30" placeholder="YY" v-model="country" />
        </div>
      </div>

      <p class="register-form--text">All fields with * are required</p>
      <button class="btn-primary" @click="step++">Next</button>
    </div>

    <div class="second-step" v-show="step == 2">
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
  </div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

export default {
  name: "MemoryForm",
  data() {
    return {
      checkedInput: [],
      firstName: "",
      lastName: "",
      hometown: "",
      country: "",
      marker: null,
      step: 1,
    };
  },
  watch: {
    step(step) {
      if (step === 2) this.setupMap();
    },
  },
  methods: {
    setupMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYWxpYW5hY29uZGEiLCJhIjoiY2tucHh0aHF0MW5qcDJucHIyeW1ub2Q2MyJ9.lFmj8JXfO-0usB2mTTGMdw";
      const map = new mapboxgl.Map({
        container: "Mapbox2",
        style: "mapbox://styles/alianaconda/cknpxulrh0qfq18jspj506pzx",
        center: [20, 40], // starting position [lng, lat]
        zoom: 2, // starting zoom
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.register-form {
  width: 315px;
  min-height: 500px;

  .form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .subheadline {
      margin: 0 0 15px 0;
    }

    input {
      padding: 10px 0;
    }

    .checkbox {
      display: inline-block;
      padding: 10px 15px 10px 0;

      &-wrapper {
        text-align: left;
        margin-bottom: 15px;
      }
    }
  }
  .first-step {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .btn-primary {
    z-index: 1;
  }
  .date-wrapper {
    width: 100%;
  }

  .birth-wrapper,
  .passing-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    input {
      text-align: center;
    }
  }

  &--text {
    text-align: left;
    font-size: 12px;
    margin: 0 0 3px 0;
    font-family: "FontLight";
    text-decoration: none;
    color: $primary-background-color;
    width: 100%;
  }

  .input-100 {
    margin-bottom: 15px;
    padding: 5px 0;
    width: 313px;
    outline: none;
    border: 1px solid $primary-background-color;
  }

  .input-30 {
    width: 75px;
    outline: none;
    border: 1px solid $primary-background-color;
    padding: 5px 0;
  }

  .second-step {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    overflow: hidden;
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
  }
}
</style>
