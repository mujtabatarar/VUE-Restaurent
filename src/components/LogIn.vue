<template>
  <div class="LoginClass">
    <img class="logo" alt="Vue logo" src="../assets/pngegg.png" />
    <h1>Log In</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Password" v-model="password" />
    <br />
    <button v-on:click="LoginUser">Log In</button>
    <hr/>
    <h3> Not Registered? follow up on sign up page </h3>
    <button v-on:click="this.$router.push({
        name: 'SignIn',
      })">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user.info");
    if (user) {
          console.warn(user);

      this.$router.push({
        name: "Home",
      });

    }
  },
  methods: {
    async LoginUser() {
      console.log("user pressed");
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      console.log("this is result" + result);
      if (result.status == 200) {
        //save login info to local storage, 
        localStorage.setItem("user.info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" }); 
      }
    },
  },
};
</script>

<style>
.LoginClass input {
  width: 350px;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  border: 1px solid;
  border-color: deepskyblue;
  display: block;
  text-align: center;
}

.LoginClass button {
  width: 375px;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  background-color: dimgray;
  color: aliceblue;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.LoginClass img {
  width: 220px;
  padding: 40px;
}

.LoginClass h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 52px;
}
hr {
  width: 375px;
}
</style>
