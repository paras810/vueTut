<template>
      <h2>Html Binding</h2>
      <h4>{{stringg}}</h4>
      <div v-html="tag"></div>
      <div v-html="tag2"></div>
      
</template>

<script >
    export default{
   data(){
    return{
    stringg:'new user entered',
    tag:`<h6>this is a heading </h6>`,
    tag2:`<li>List </li>`,
    }
   }

}
    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
    </style>