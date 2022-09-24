<template>
  <h1>User Data</h1>

  <ul class="item" v-for="item,index in list" :key="index">
    <img :src="item.avatar" alt="">
<li>{{item.id}}</li>
<li>{{item.email}}</li>
<li>{{item.first_name}}</li>
  </ul>

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

<style scoped>
  h1{
    color: rgb(80, 242, 40);
    background-color: black;
  }
  .item{
    display: flex; 
    list-style: none;
    align-items: center;
    justify-content: center;
    /* border: 4px solid red; */
  }
  .item img{
    width: 40px;
    border-radius: 100%;
  }
  .item li{
    text-align: center;
    width: 400px;
    /* border: 1px solid; */
    padding: 5px;
    display: inline-block;
  }
</style>


