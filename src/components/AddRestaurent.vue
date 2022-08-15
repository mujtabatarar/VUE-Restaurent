<template>
  <div>
    <header-component/>
    <div v-if="!hide" class="restaurentInput" ref="addForm">
      <img class="logo" alt="Vue logo" src="../assets/pngegg.png" />
      <h1>Enter Restaurent Detailes</h1>
      <input type="text" placeholder="Restaurent Name" v-model="name" />
      <br />
      <input type="text" placeholder="Location" v-model="location" />
      <br />
      <input type="text" placeholder="Contact" v-model="contact" />
      <br />
      <input
        type="text"
        placeholder="Opening time e.g 10:00 AM"
        v-model="openingTime"
      />
      <br />
      <input
        type="text"
        placeholder="Closing time e.g 11:00 PM"
        v-model="closingTime"
      />
      <br />
      <!-- <input type="file" accept="image/*"  /> 
    <br/> -->
      <button v-on:click="addRestaurentDetailes">Submit Details</button>
    </div>
    <div v-if="hide" ref="submitted">
      <data-submitted />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DataSubmitted from "./DataSubmitted.vue";
import HeaderComponent from './HeaderComponent.vue';
export default {
  name: "AddRestaurent",
  data() {
    return {
      name: "",
      location: "",
      contact: "",
      openingTime: "",
      closingTime: "",
      pics: undefined,
      hide: false,
    };
  },
  components: {
    DataSubmitted,
    HeaderComponent,
  },
  methods: {
    async addRestaurentDetailes() {
      // this.currentImage = this.$refs.file.files.item(0);

      console.log("this is warn ");
      let result = await axios.post("http://localhost:3000/restaurent", {
        name: this.name,
        location: this.location,
        contact: this.contact,
        openingTime: this.openingTime,
        closingTime: this.closingTime,
      });
      if (result.status == 201) {
        console.warn("all okkkkkk");
        this.hide = true;

        // show Home after 2 sec.
        setTimeout(function () {
                    console.log("calling timeout");

         // this.$router.push({ name: "Home" });
        }, 2000);
                  this.$router.push({ name: "Home" });
        console.log("after set time out");

        
      } else {
        console.warn("nooot okkk");
        console.warn(result.status);
      }
    },
  },
};
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
