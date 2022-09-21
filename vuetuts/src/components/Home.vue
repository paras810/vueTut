<template>
<h2>BeforeCreated and created {{name}}</h2>
</template>

<script>
export default {
    data() {
        return {
         name:'paras'
        }
    },
    beforeCreate(){
        alert('beforCreate')
        this.name = 'before paras'
    },
    created(){
       
        alert('created')
        this.name = 'Mohan'
    }
}
</script>

<style>
h2 {
    color: rgb(82, 37, 243);
}
</style>
