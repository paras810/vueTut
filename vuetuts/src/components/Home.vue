<template>
<h2>Name Slots</h2>

<User>
    <template v-slot:header>
        <h3 >Car</h3>
    </template>

    <template v-slot:content>
        <p >Model : 1931</p>
    </template>

    <template v-slot:paras>
         <button >Buy now</button>
    </template>
</User>

<User>
    <template v-slot:header>
        <h3 >Car</h3>
    </template>

    <template v-slot:content>
        <p >Model : 1931</p>
    </template>

    <template v-slot:paras>
         <button >Buy now</button>
    </template>
</User>

<User>
    <template v-slot:header>
        <h3 >Car</h3>
    </template>

    <template v-slot:content>
        <p >Model : 1931</p>
    </template>

    <template v-slot:paras>
    </template>
</User>
</template>

<script>
import User from './User.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        User
    }

}
</script>

<style>
h2 {
    color: rgb(82, 37, 243);
}
</style>
