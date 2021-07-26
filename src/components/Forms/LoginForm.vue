<template>
  <div class="login-form form">
    <div class="form-wrapper">
      <h5 class="login-form--text">Login</h5>
      <input type="email" v-model="loginName" />

      <h5 class="login-form--text">Password</h5>
      <input type="password" v-model="password" />
    </div>

    <p v-if="error" class="register-form--text--error">{{ error }}</p>
    <button @click="handleLogin" class="btn-primary">Submit</button>
    <a class="login-form--text" href="#">Forgot Password?</a>

    <div class="login-form--bottom">
      <button class="btn-primary">Create new Account</button>
    </div>
  </div>
</template>

<script>
import userApi from "../../api/users";
export default {
  name: "LoginForm",
  data() {
    return {
      loginName: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      userApi
        .performLogin(this.loginName, this.password)
        .then((userModel) => {
          this.$store.commit("authenticate", true);
          this.$store.commit("setUserModel", userModel);
          this.$store.commit("setModal", null);
        })
        .catch((err) => {
          this.error = err;
          this.$store.commit("authenticate", false);
          this.$store.commit("setUserModel", null);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";

.login-form {
  width: 315px;

  &--text {
    text-align: left;
    font-size: 12px;
    margin: 0 0 3px 0;
    font-family: "FontLight";
    text-decoration: none;
    color: $primary-background-color;
  }

  &--bottom {
    margin-top: 25px;
    width: 100%;
    border-top: 1px solid $primary-background-color;
  }

  input {
    margin-bottom: 15px;
    padding: 5px;
    width: 275px;
    outline: none;
    border: 1px solid $primary-background-color;
  }

  button {
    margin: 20px;
  }
}
</style>
