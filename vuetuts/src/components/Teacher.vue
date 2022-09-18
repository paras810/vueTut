<template >
    <div>
        teacher component
        <ol>
            <li>{{name}}</li>
        </ol>
    </div>
</template>

<script>
    export default {
        props:{
            name:String
        }
    }
</script>