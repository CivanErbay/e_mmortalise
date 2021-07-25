<template>
  <div class="register-form form">
    <div class="form-wrapper">
      <div class="image-upload">
        <input type="file" @change="setImgData" name="imageFile" />
        <input type="submit" value="Upload" />
        <div class="img-wrapper">
          <img :src="image" />
        </div>
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
      image: null,
    };
  },
  methods: {
    setImgData(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.image = new Image();

      // I don't know why we need this
      //   var reader = new FileReader();
      //   var vm = this;

      //   reader.onload = (e) => {
      //     vm.image = e.target.result;
      //   };
      //   reader.readAsDataURL(file);
    },
    handleSubmit() {
      // handle save of memory
      console.log(this.image);
      this.$store.commit("editMemory", { imageData: this.image });
      // TODO add memory using users api
      this.$store.commit("setModal", null);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/form.scss";

.img-wrapper {
  height: 400px;
  width: 100%;
  background-color: rgba(207, 207, 207, 0.418);
  margin: 1rem auto;

  // TODO handle ladnscape images (right now it works well for portrait)
  img {
    height: 100%;
    width: auto;
  }
}
</style>