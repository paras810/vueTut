<template>
      <h2>Slots</h2>
      <!-- <User name='Vue'/>
      <User name='php'/>
      <User name='node'/> -->

      <User><h1>vue tut</h1></User><br>
      <User><a href="#">vue tut</a></User><br>
      <User> <img src="images.jpg" alt=""></User><br>
      <!-- slot default value -->
      <User></User>

      <!-- in react we use this.props.children -->
</template>

<script >
    import User from './User.vue'
export default{
    data() {
        return {

        }
    },
    components:{
        User
    }
   

}

    </script>
    <style >
        h2{
            color: rgb(82, 37, 243);
        }
       
    </style>  