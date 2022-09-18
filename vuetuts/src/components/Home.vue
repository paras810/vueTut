<template>
      <h2>Ref</h2>
      <input type="text" ref="input">
      <button @click="getData">Click</button>
</template>

<script >
export default{
    data(){
        return{

        }
    },
    methods:{
        getData(){
            // alert('clicked')
            this.$refs.input.focus()
            let val = this.$refs.input.value
             val = this.$refs.input.style.color = 'blue'
             val = this.$refs.input.style.padding = '2rem'

            console.log(val)
        }
    }
}

    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
    </style>