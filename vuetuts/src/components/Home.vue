<template>
<h2>Dynamic Component</h2>

<button @click="tab = 'User'" >Load User</button><br>
<button @click="tab = 'AnyComp'" >Load Child</button><br>
<button @click="tab = 'Child'">Load AnyComp</button><br>
<!-- <User/>
<AnyComp/>
<Child/> -->
<component :is="tab"/>

</template>

<script>
    import User from './User.vue';
import AnyComp from './AnyComp.vue';
import Child from './Child.vue';
export default {
    data() {
        return {
            tab: 'User'
        };
    },
    components: { AnyComp, User, Child },
}
</script>

<style>
h2 {
    color: rgb(82, 37, 243);
}
</style>
