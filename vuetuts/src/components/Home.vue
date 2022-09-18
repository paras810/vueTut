<template>
      <h2>non-props data</h2>
      <User data='some data' xyz="user-cmp"/>
</template>

<script >
import User from "./User.vue";
export default{
    data() {
        return {
           
        };
    },
    components: { User }
}

    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
       
    </style>  