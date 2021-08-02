<template>
  <div class="register-form form">
    <div class="form-wrapper">
      <div class="register-form-50-50">
        <div>
          <h5 class="register-form--text">First Name</h5>
          <input class="input-50" v-model="firstName" />
        </div>
        <div>
          <h5 class="register-form--text">Last Name</h5>
          <input class="input-50" v-model="lastName" />
        </div>
      </div>

      <h5 class="register-form--text">Email Adress</h5>
      <input type="email" class="input-100" v-model="email" />

      <h5 class="register-form--text">Password</h5>
      <input class="input-100" type="password" v-model="password" />
    </div>

    <p class="register-form--text">
      By clicking Sign Up, you agree to our <a href="#">Terms</a>. Learn how we
      collect, use and share your data in our <a href="#">Data Policy</a> and
      how we use cookies and similar technology in our
      <a href="#">Cookies Policy</a>.
    </p>
    <p v-if="error" class="register-form--text--error">{{ error }}</p>
    <button class="btn-primary" @click="handleRegister">Register</button>
  </div>
</template>

<script>
import userApi from "../../api/users";
export default {
  name: "RegisterForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async handleRegister() {
      userApi
        .performRegister({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })
        .then((userModel) => {
          this.$store.commit("authenticate", true);
          this.$store.commit("setUserModel", userModel);
          this.$store.commit("setModal", null);
        })
        .catch((err) => {
          this.error = err;
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.register-form {
  width: 280px;
  @include breakpoint(medium) {
    width: 315px;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &-50-50 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  &--text {
    text-align: left;
    font-size: 12px;
    margin: 0 0 3px 0;
    font-family: "FontLight";
    text-decoration: none;
    color: $primary-background-color;
  }

  .input-50 {
    width: 130px;
    height: 15px;
    padding: 5px;
    outline: none;
    border: 1px solid $primary-background-color;
  }

  .input-100 {
    margin-bottom: 15px;
    padding: 5px 0;
    width: 280px;
    outline: none;
    border: 1px solid $primary-background-color;

    @include breakpoint(medium) {
      width: 315px;
    }
  }
}
</style>
