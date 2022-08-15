<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurent</router-link>
    <div class="userInfo">
        <p v-if="showUserInfo">Welcome {{userData.name}}</p>
      </div>
    <a  v-on:click="signOut">Sign Out</a>
    
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      showUserInfo: false,
      userData: {},
    };
  },

  mounted(){
    let user = localStorage.getItem("user.info");
    if (user) {
      this.showUserInfo = true;
      this.userData = JSON.parse(user);
    }
    if(!user){
      this.$router.push({ name: "LogIn" });
    }
  },

  methods: {
    signOut() {
      setTimeout(()=>{
        localStorage.clear();
        this.$router.push({ name: "LogIn" });
      },2000)
    },
  },
};
</script>

<style>
.nav {
  background-color: black;
  margin: 0px;
  padding: 0px;
  border: 0px;
  display: flex;
  
}
.nav a {
  padding: 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 16px;
  align-items: flex-start;

  color: aliceblue;
  padding: 15px;
  align-content:space-between;
}
.userInfo{
  font-size: 16px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
        margin-left: auto;
        margin-right: 10px;
        color: aliceblue;

}

</style>
