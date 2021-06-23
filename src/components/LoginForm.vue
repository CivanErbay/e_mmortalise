<template>
  <div class="login-form">
    <div class="form-wrapper">
      <h5 class="login-form--text">Login</h5>
      <input v-model="loginName" />

      <h5 class="login-form--text">Password</h5>
      <input v-model="password" />
    </div>
    <button class="btn-primary">Submit</button>
    <a class="login-form--text" href="#">Forgot Password?</a>

    <div class="login-form--bottom">
        <button class="btn-primary">Create new Account</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      loginName: "",
      password: "",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.login-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  border: 3px solid $primary-background-color;
  border-radius: 5px;
  padding: 70px 50px 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
