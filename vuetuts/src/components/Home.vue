<template>
      <h3>pass data parent to child component</h3>
      <Child name='Paras' :obj="obj" :getData='getData'/>
      <ol>
      </ol>
</template>
<script >
import Child from './child.vue'
    export default{
    name: "home",
    components: {
       Child,
      
      },

    data() {
        return {
          obj:{name:'paras',email:'paras@gmail.com'}
        };
    },

    methods:{
      getData(){
        alert('parent function called')
      }
    }
}
    </script>
    <style scoped>
        h3{
            color: rgb(82, 37, 243);
        }
    </style>