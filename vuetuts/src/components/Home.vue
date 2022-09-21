<template>
<h2>BeforeMount and mount </h2>
</template>

<script>
export default {
    data() {
        return {
         name:'paras'
        }
    },
  beforeMount() {
      alert('beforMount')
      console.log('beforeMount', this.$el)
  },
  mounted() {
      alert('Mounted')
      console.log('Mounted', this.$el)
  },
}
</script>

<style>
h2 {
    color: rgb(82, 37, 243);
}
</style>
