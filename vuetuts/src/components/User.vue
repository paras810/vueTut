<template >
    <h1 ref="user">User component</h1>
</template>

<script>
    export default {
        data(){
            return{
                chng:''
            } 
        },
        beforeUnmount() {
            // alert('beforUnmount user')
            console.log('beforeUnmount', this.$refs['user'])
        },
        unmounted() {
            // alert('unmount')
            console.log('unmount', this.$refs['user'])
        },
    };
</script>