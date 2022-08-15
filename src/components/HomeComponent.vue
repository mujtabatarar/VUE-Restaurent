<template>
  <div class="HomeDiv">
    <HeaderComponent />
    <img class="logo" alt="Vue logo" src="../assets/pngegg.png" />
    <h1>Avaliable Restaurent</h1>
    <table>
      <thead>
        <tr>
          <th>SR</th>
          <th>Name</th>
          <th>Location</th>
          <th>Contact</th>
          <th>Opening Time</th>
          <th>Closing Time</th>
          <th>Update/Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="restaurent in data" :key="restaurent.id">
          <th>{{ restaurent.id }}</th>
          <th>{{ restaurent.name }}</th>
          <th>{{ restaurent.location }}</th>
          <th>{{ restaurent.contact }}</th>
          <th>{{ restaurent.openingtime }}</th>
          <th>{{ restaurent.closingtime }}</th>
          <th class="updateTH">
            <router-link :to="'/update/' + restaurent.id"
              ><img
                class="editImg"
                src="../assets/edit-icon.png"
                width="30"
                height="30"
            /></router-link>
            <button v-on:click="deleteRestaurent(restaurent.id)">
              <img
                class="delImg"
                src="../assets/delete.png"
                width="30"
                height="30"
              />
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import axios from "axios";
export default {
  name: "HomeComponent",
  data() {
    return {
      data: null,
    };
  },
  components: {
    HeaderComponent,
  },
  mounted() {
    console.log("this is mounted");
    this.getRestaurentList();
    let user = localStorage.getItem("user.info");
    if (!user) {
      this.$router.push({
        name: "LogIn",
      });

    }
  },
  methods:{
    async deleteRestaurent(id){
       let result =  await axios.delete("http://localhost:3000/restaurent/"+id);
       if(result.status==200){
            this.getRestaurentList();
       }
    },


    getRestaurentList(){
        axios
      .get("http://localhost:5100/restaurents")
      .then((response) => (this.data = response.data));
    console.log(this.data);
    }
  }
};
</script>






























<style>
.logo {
  margin: 20px;
}
table,
th,
td,
tr {
  border: 3px solid black;
}
th {
  margin: 10px;
  padding: 30px;
}
table {
  margin-left: auto;
  margin-right: auto;
}
button {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
}

.editImg {
  margin-right: 0px;

  padding-right: 10px;
  border-right: 2px solid black;
  height: 30px;
}
.delImg {
    margin-left: 0px;
    padding-left: 10px;
  border-left: 2px solid black;
  height: 30px;
}
h1{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
