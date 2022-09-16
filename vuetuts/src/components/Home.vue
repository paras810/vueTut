<template>
    <ol>
      <h3>If Else Conditions</h3>
      <h1 v-if="!conditions">not vue</h1>
      <!-- <h1 v-if="!conditions">Good Night</h1> -->
      <h1 v-else="!conditions">vue</h1>
        <!-- <button class="con" v-on:click="toggle">hello everyone 😍</button> -->
        <!-- more easy way to toggle -->
        <button class="con" v-on:click="conditions=!conditions">hello everyone 😍</button>
       
    </ol>
</template>
<script>
    export default{ 
        name:'home',
      data(){
        return{
          //  conditions:false
           conditions:true
        }
      },
      methods:{
        toggle(){
          this.conditions = !this.conditions
        }
      }
    }
    </script>
    <style scoped>
        h3{
            color: rgb(82, 37, 243);
        }
        label{
            margin: 0 .5rem;
        }
        .con{
          color: white;
          background-color: blue;
          padding: .5rem 1rem;
          border-radius: .3rem;
          border: none;
        }
    </style>