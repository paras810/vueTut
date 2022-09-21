<template>
<h2>BeforeUnmount and unmount </h2>
<button @click="show = !show">Toggle</button>
<User v-if="show" />
</template>

<script>
import User from "./User.vue";
export default {
    data() {
        return {
            show: true 
        };
    },
    components: { User }
}
</script>

<style>
h2 {
    color: rgb(82, 37, 243);
}
</style>
