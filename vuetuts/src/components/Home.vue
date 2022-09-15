

<template>
    <ol>
        <!-- <li>Home {{'not available'.length}}</li> -->
        <li>email {{email}}</li>
        <li>gen {{gen('dell')}}</li>
        <li>mobile {{mobile}}</li>
        <li>mobile {{mobile==111}}</li>
        <li>mobile {{mobile=111}}</li>
    </ol>
</template>
<script>
    export default{
        name:'home',
        data(){
            return{
                email:'example@gmail.comm',
                mobile: '000',
                gen: function(model){
                    return  `${model} i3 3rd gen ${model}`
                    
                }
            }
        }
    }
    </script>