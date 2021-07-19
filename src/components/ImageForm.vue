<template>
  <div class="register-form form">
    <div class="form-wrapper">
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
      <button class="btn-primary" @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageForm",
  data() {
    return {
      imageData: null,
    };
  },
  meyhods: {
    handleSubmit() {
      // handle save of memory
      this.$store.commit("editMemory", { imageData });
      this.$store.commit("setModal", null);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
</style>