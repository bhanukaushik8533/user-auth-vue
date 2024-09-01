<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" v-model="email" placeholder="Enter Email" />
    <br />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <br />
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      try {
        axios
          .post("http://localhost:7000/auth/login", {
            email: this.email,
            password: this.password,
          })
          .then((resp) => console.log(resp));
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>
