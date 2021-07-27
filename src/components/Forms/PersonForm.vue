<template>
  <div class="register-form form">
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
        <input
          class="input-30"
          type="number"
          min="0"
          max="31"
          placeholder="DD"
          v-model="dateOfBirth.day"
        />
        /
        <input
          class="input-30"
          type="number"
          min="1"
          max="12"
          placeholder="MM"
          v-model="dateOfBirth.month"
        />
        /
        <input
          class="input-30"
          type="number"
          min="1900"
          max="2100"
          placeholder="YY"
          v-model="dateOfBirth.year"
        />
      </div>
      <h5 class="register-form--text">Date of Passing or Missing</h5>
      <div class="passing-wrapper">
        <input
          class="input-30"
          type="number"
          min="0"
          max="31"
          placeholder="DD"
          v-model="dateOfMissing.day"
        />
        /
        <input
          class="input-30"
          type="number"
          min="1"
          max="12"
          placeholder="MM"
          v-model="dateOfMissing.month"
        />
        /
        <input
          class="input-30"
          type="number"
          min="1900"
          max="2100"
          placeholder="YY"
          v-model="dateOfMissing.year"
        />
      </div>
    </div>

    <p class="register-form--text">All fields with * are required</p>
    <p v-if="error" class="register-form--text--error">{{ error }}</p>
    <button class="btn-primary" @click="handleNext">Next</button>
  </div>
</template>

<script>
import { modalNamespace } from "../../constants";

export default {
  name: "MemoryForm",
  data() {
    return {
      checkedInput: [],
      firstName: "",
      lastName: "",
      hometown: "",
      country: "",
      dateOfBirth: { day: "", month: "", year: "" },
      dateOfMissing: { day: "", month: "", year: "" },
      error: null,
    };
  },
  mounted() {
    this.$store.commit("newMemory");
  },
  methods: {
    handleNext() {
      // validate required fields
      if (
        !this.firstName ||
        !this.lastName ||
        !this.hometown ||
        !this.country
      ) {
        this.error = "Please add the required fields";
        return;
      }

      this.error = null;

      const dateOfBirth =
        this.dateOfBirth.day &&
        this.dateOfBirth.month &&
        this.dateOfBirth.year &&
        new Date(
          this.dateOfBirth.year,
          this.dateOfBirth.month - 1,
          this.dateOfBirth.day
        );
      const dateOfMissing =
        this.dateOfMissing.day &&
        this.dateOfMissing.month &&
        this.dateOfMissing.year &&
        new Date(
          this.dateOfMissing.year,
          this.dateOfMissing.month - 1,
          this.dateOfMissing.day
        );

      this.$store.commit("editMemory", {
        firstName: this.firstName,
        lastName: this.lastName,
        hometown: this.hometown,
        country: this.country,
        dateOfBirth,
        dateOfMissing,
      });
      this.$store.commit("setModal", modalNamespace.DESCRIPTION_FORM);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/form.scss";
</style>
