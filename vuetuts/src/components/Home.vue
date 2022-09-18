<template>
      <h2>form modifiers</h2>
      <!-- <input type="text" v-model.lazy="data"> -->
      <input type="number" v-model.number.lazy="data">
    <h3>Data : {{typeof (data)}}</h3>
    <h3>Data : {{data}}</h3>
</template>

<script >
export default{
    data(){
        return{
        data:''
        }
    },

}

    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
        label{
            margin: .5rem 1rem;
        }
    </style>  