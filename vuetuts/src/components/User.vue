<template >
   <h4>User component</h4>
   <button @click="getuser(name)" >send user name</button>
</template> 

<script>
    export default {
     data(){
        return{
            name:'Paras'
        }
     } ,
     props:{
      getuser:Function
    }  

    }
</script>