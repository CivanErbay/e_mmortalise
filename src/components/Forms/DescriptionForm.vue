<template>
  <div class="register-form form">
    <div class="form-wrapper">
      <!-- TODO -->
      <h4>A few words...</h4>
      <textarea v-model="description" placeholder="Description..."></textarea>
    </div>
    <button class="btn-primary" @click="handleNext">Next</button>
  </div>
</template>

<script>
import { modalNamespace } from "../../constants";
export default {
  name: "DescriptionForm",
  data() {
    return {
      description: "",
    };
  },
  methods: {
    handleNext() {
      this.$store.commit("editMemory", { description: this.description });
      this.$store.commit("setModal", modalNamespace.IMAGE_FORM);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/form.scss";

textarea {
  width: 100%;
  height: 350px;
  resize: none;
  margin-bottom: 1rem;
  border: 2px solid $primary-font-color;
}
</style>