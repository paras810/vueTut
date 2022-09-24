<template>
  <h1>Routing</h1>
<router-link to="/">Home</router-link><br>
<router-link to="/login">Login</router-link><br>
<router-link  to="/Profile/1">Paras Profile</router-link><br>
<router-link to="/brokenLink">404</router-link>
    <router-view></router-view>
    <!-- <Home/>  -->
</template>

<script >
export default {
  
  }

</script>

<style>
  h1{
    position: absolute;
    top: -10rem;left: 0;
  }
</style>


