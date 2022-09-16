<template>
    <ol>
      <h3>get input field value</h3>
      <input v-model="email" type="text">
      <br>
      <input v-model="password" type="text"><br>
      <button v-on:click="getData" type="button">get values</button>
    </ol>
</template>
<script>
    export default{ 
        name:'home',
      data(){
        return{
            email:null,
            password:null
        }
      },
      methods:{
        getData(){
       console.log(this.email, this.password)
        }
      }
    }
    </script>
    <style scoped>
        h3{
            color: rgb(82, 37, 243);
        }
    </style>