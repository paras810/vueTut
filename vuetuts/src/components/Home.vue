<template>
<h2>BeforeUpdate and update </h2>
<h4 ref="names">{{name}}</h4>
<button @click="name = name + 1" >Update value</button>
</template>

<script>
export default {
    data() {
        return {
         name:0
        }
    },
 beforeUpdate() {
// alert('value is changing')

//vlaue through data
// console.log('beforUpdate',this.name)

//vlaue through UI
console.log('beforUpdate',this.$refs['names'].textContent)
},
updated() {
    // alert('value changed')
    
    //vlaue through data
    // console.log('updated',this.name)

    //vlaue through UI
    console.log('updated',this.$refs['names'].textContent)

 },
}
</script>

<style>
h2 {
    color: rgb(82, 37, 243);
}
</style>
