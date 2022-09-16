<template>
    <ol>
      <h3>get checkbox & radio button value</h3>
      <label for="java">Java</label>
      <input type="checkbox" value="java" id="java" v-model="tech">
      <label for="php">Php</label>
      <input type="checkbox" value="php" id="php" v-model="tech">
      <label for="vue">Vue</label>
      <input type="checkbox" value="vue" id="vue" v-model="tech">

      <p>{{tech}}</p>
<br>
      <h2>For check box</h2>
      <h4>What is your age:</h4>
      <label for="age1">0-20</label>
      <input type="radio" name="age" id="age1" value="0-20" v-model="age">

      <label for="age2">20-40</label>
      <input type="radio" name="age" id="age2" value="20-40" v-model="age">

      <label for="age1">40-60</label>
      <input type="radio" name="age" id="age3" value="40-60" v-model="age">

      <label for="age4">60-80</label>
      <input type="radio" name="age" id="age4" value="60-80"  v-model="age">
<br>
<p>{{age}}</p>
    </ol>
</template>
<script>
    export default{ 
        name:'home',
      data(){
        return{
            tech:[],
            age:null
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
        label{
            margin: 0 .5rem;
        }
    </style>