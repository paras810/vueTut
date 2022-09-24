<template>
  <h1>Routing</h1>
<router-link to="/">Home</router-link><br>
<router-link to="/login">Login</router-link><br>
<router-link  to="/Profile/1">Paras Profile</router-link><br>
<router-link   to="/Profile/2">Rohan Profile</router-link><br>
<router-link   to="/Profile/3">Mohan Profile</router-link><br>
    <router-view></router-view>
    <!-- <Home/>  -->
</template>

<script >
export default {
  data() {
    return {
      
    }
  }}

</script>

<style>
  h1{
    position: absolute;
    top: -10rem;left: 0;
  }
</style>


