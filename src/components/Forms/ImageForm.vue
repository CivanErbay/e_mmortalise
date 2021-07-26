<template>
  <div class="register-form form">
    <div class="form-wrapper">
      <div class="image-upload">
        <input type="file" @change="setImgData" name="imageFile" />
        <input type="submit" value="Upload" />
        <div class="img-wrapper">
          <img :src="imageData" />
        </div>
      </div>
      <button class="btn-primary" @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
import usersApi from "../../api/users";

export default {
  name: "ImageForm",
  data() {
    return {
      imageData: "",
    };
  },
  methods: {
    setImgData(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // this.image = new Image();

      // I don't know why we need this
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
        this.imageData = e.target.result;
      };
      reader.readAsDataURL(file);
      // console.log(reader);
    },
    handleSubmit() {
      // handle save of memory
      // console.log(this.imageData);
      this.$store.commit("editMemory", { imageData: this.imageData });
      // add memory using users api
      const finishedMemory = {
        ...this.$store.state.creatingMemory,
        imageData: this.imageData,
      };
      usersApi
        .addMemory(finishedMemory, this.$store.state.userModel.user_id)
        .then((newMemory) => {
          this.$store.commit("setModal", null);
        })
        .catch((err) => console.log(err));
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