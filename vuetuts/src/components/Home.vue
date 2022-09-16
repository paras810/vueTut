<template>
    <ol>
      <h3>two way binding</h3>
      <input type="text" v-model="count">
      <p>{{count}}</p>

      <input type="number" v-model="Numberss">
      <h2>{{Numberss}}</h2>
    </ol>
</template>
<script>
    export default{ 
        name:'home',
      data(){
        return{
            count: 10,
            Numberss:123456789
        }
      }
    }
    </script>
    <style scoped>
        span{
            background-color: blue;
            color: white;
        }
    </style>