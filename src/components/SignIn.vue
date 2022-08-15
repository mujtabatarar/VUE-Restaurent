<template>
  <div class="signInDesign">
    <img class="logo" alt="Vue logo" src="../assets/pngegg.png" />
    <h1>Sign Up</h1>
    <input type="text" placeholder="Name" v-model="name" />
    <br />
    <input class="emailClass" type="text" placeholder="Email" v-model="email" ref="input" />
    <br />
    <input type="password" placeholder="Password" v-model="password" />
    <br />
    <button v-on:click="register()">SignIn</button>
    <hr/>
    <h3>All ready signed up? click below to log in</h3>
    <button v-on:click="this.$router.push({
        name: 'LogIn',
      })"> Login Page</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user.info");
    if (user) {
      this.$router.push({
        name: "Home",
      });
    }
    console.warn(user);
  },
  methods: {
    async register() {
      
        console.log("this is warn ");
        let result = await axios.post("http://localhost:3000/user", {
          email: this.email,
          name: this.name,
          password: this.password,
        });
        if (result.status == 201) {
          console.warn("all okkkkkk");
          //we need to convert data from object to string because local storage do not store data as object.
          //way to store data in local storage.
          this.$router.push({ name: "LogIn" });
        } else {
          console.warn("nooot okkk");
          console.warn(result.status);
        }
      }
    },
  
};
</script>

<style>
.signInDesign input {
  width: 350px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 18pt;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  padding: 10px;
  border-color: deepskyblue;
  text-align: center;
}
.signInDesign button {
  width: 373px;
  font-size: 18px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  color: white;
  background-color: dimgray;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: block;
}
.signInDesign h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 52px;
}
.logo {
  width: 220px;
}
</style>

<!--

         console.warn("this email allready exist");
            this.$ref.input.value= "Email Allready Exist";
      }{



let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}`
      );
      if (result.status != 200) {
        -->