<template>
  <div>
    <header-component/>
    <div v-if="!hide" class="restaurentInput" >
      <img class="logo" alt="Vue logo" src="../assets/pngegg.png" />
      <h1>Update Restaurent Details</h1>
      <input type="text" placeholder="Restaurent Name" v-model="data.name" />
      <br />
      <input type="text" placeholder="Location" v-model="data.location" />
      <br />
      <input type="text" placeholder="Contact" v-model="data.contact" />
      <br />
      <input
        type="text"
        placeholder="Opening time e.g 10:00 AM"
        v-model="data.openingTime"
      />
      <br />
      <input
        type="text"
        placeholder="Closing time e.g 11:00 PM"
        v-model="data.closingTime"
      />
      <br />
      <!-- <input type="file" accept="image/*"  /> 
    <br/> -->
      <button v-on:click="updateRestaurent">Apply Update</button>
    </div>
    <div v-if="hide">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';
export default {
    name:"UpdateRestaurent",
    data(){
      return{
   
        hide:false,
        updateID:"",
        data:{
          name:"",
          location:"",
          contact:"",
          openingTime:"",
          closingTime:"",
        },
      };
    },
    components: {
       HeaderComponent 
    },
    mounted(){
      //this.updateID = this.$router.params.id;
      this.getRestaurentDetails();
    },
    methods:{
      async getRestaurentDetails(){
          //this.updateID = this.$router.params.id;
        try{
        console.log("this is id" + this.updateID);
        let response = await axios.get("http://localhost:3000/restaurent/" + this.$route.params.id);
        this.data = response.data;
        console.log(response.data.name);
        console.log(this.data.name);
        }catch(error){
          console.warn("you got an error in getRestaurent");
        }
      },
      async updateRestaurent(){
        
        let response = await axios.put("http://localhost:3000/restaurent/" + this.$route.params.id, {
          name: this.data.name,
          location: this.data.location,
          contact: this.data.contact,
          openingTime: this.data.openingTime,
          closingTime: this.data.closingTime,
        });
        if(response.status == 200){
          this.$router.push({name: 'Home'});
        }
        
      }
    }
}
</script>

<style>
.restaurentInput input {
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

.restaurentInput button {
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

.restaurentInput img {
  width: 220px;
  padding: 30px;
  margin-bottom: 0px;
  margin-top: 0px;
}

.restaurentInput h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 42px;
  padding: 10px;
  padding-top: 0px;
}
</style>