<template>
      <h2>props with example</h2>
      <h4>{{childUser}}</h4>
      <User :getuser='getUserName'/>
      
</template>

<script >
import User from "./User.vue";
    export default{
    data() {
        return {
          childUser:''
        };
    },
    components: { User },
    methods:{
      getUserName(zname){
      this.childUser = zname
      }
    },
    
}
    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
    </style>