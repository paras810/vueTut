<template >
    <div>
        student component
        <ol>
            <li>{{name}}</li>
        </ol>
    </div>
</template>

<script >
export default {
    props:{
      name:String
    }
}
</script>
