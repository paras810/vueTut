<template>
  <h1>Call API</h1>
<p v-for="item, index in list" :key="index">{{item.id}} --- {{item.email}}---{{item.first_name}}</p>

  <!-- <a href="https://reqres.in/api/users?page=1">api</a> -->
</template>

<script >
  import axios from 'axios'
export default {
  data() {
    return {
      list:[]
    }
  },
  async mounted() {
    let result = await axios.get('https://reqres.in/api/users?page=1')
    // console.log(result.data.data[0].email)
    console.log('api data ',result.data.data)
     this.list = (result.data.data)
  },
  }

</script>

<style>
  h1{
    color: rgb(80, 242, 40);
    background-color: black;
  }
</style>


