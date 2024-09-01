
<template>
  <div class="">
    <h1>Sign Up</h1>
    <input type="text" v-model="name" placeholder="Name" />
    <br />
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="password" v-model="password" placeholder="Password" />
    <br />
    <input
      type="password"
      v-model="confirmPassword"
      placeholder="Confirm Password"
    />
    <br />
    <button v-on:click="signUp">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async signUp() {
      try {
        if (this.password === this.confirmPassword) {
          axios
            .post("http://localhost:7000/auth/signup", {
              name: this.name,
              email: this.email,
              password: this.password,
            })
            .then((resp) => console.log(resp));
        } else {
          alert("password mismatch");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 400px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #afff;
  background-color: skyblue;
  cursor: pointer;
}
</style>