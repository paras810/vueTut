

<template>
    <ol>
        <!-- <li>Home {{'not available'.length}}</li> -->
        <li>email {{email}}</li>
        <li>type {{gen('asus')}} </li>
        <li>intro {{getData().name}}</li>
        <li>intro {{getData().email}}</li>
        <li>newMobile {{getData().newMobile}}</li>
    </ol>
</template>
<script>
    export default{
        name:'home',
        data(){
            return{
                email:'example@gmail.comm',
                mobile: '10001',
               
            }
        },
        methods: {
            gen(model){
                    return  model
                    
                },
                getData(){
                    return{
                        name:'paras',
                        email:this.email,
                        newMobile:this.mobile
                    }
                }
        },

    }
    </script>