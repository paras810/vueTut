<template>
<h2>Teleport Component</h2>
<teleport to="#footer">
    <Footer/>
</teleport>
</template>

<script>
    import Footer from './Footer.vue'
export default {
    data() {
        return {

        }
    },
    components:{ Footer }
}
</script>

<style>
h2 {
    color: rgb(82, 37, 243);
}
</style>
