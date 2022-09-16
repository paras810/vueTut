

<template>
    <ol>
        <span v-on:mousemove="test('mouse move')" >Home</span>
        <li>email {{email}}</li>
        <li>type {{gen('asus')}} </li>
        <li>intro {{getData().name}}</li>
        <li>intro {{getData().email}}</li>
        <li>newMobile {{getData().newMobile}}</li>

        <!-- event -->
        <button v-on:click="test(`  clicked by me`)" >click event</button>
        <button v-on:dblclick="test(`  double clicked by me`)" >double click event</button>
        <button v-on:click="plus">count {{count}}</button>
    </ol>
</template>
<script>
    export default{ 
        name:'home',
        data(){
            return{
                email:'example@gmail.comm',
                mobile: '10001',
               count: 10
            }
        },
        methods: {
            plus(){
                this.count = this.count + 1
            }
            ,
            gen(model){
                    return  model
                    
                },
                getData(){
                    return{
                        name:'paras',
                        email:this.email,
                        newMobile:this.mobile
                    }
                },
                test(data){
                    return alert(data)
                }
        },

    }
    </script>
    <style scoped>
        span{
            background-color: blue;
            color: white;
        }
    </style>