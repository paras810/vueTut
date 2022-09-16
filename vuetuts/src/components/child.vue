<template >
    <ol>
        <h3>Child Component  </h3>
        <li>{{name}}</li>
        <li>{{obj.email}}</li>
        <button v-on:click="getData()">call the function</button>
    </ol>
</template>

<script>
export default{
    name:'child',
    props:{
        name:String,
        obj:Object,
        getData:Function
    }
}    

</script>

<style scoped >

</style>