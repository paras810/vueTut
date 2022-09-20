<template>
      <h2>Computed property</h2>
      <h4>{{count}}</h4>
      <button @click="count= count+1">+</button>
      <button @click="count=count-1">-</button>

</template>

<script >
export default{
    data() {
        return {
          count:0
        }
    },
    watch:{
        count(currentVal,prevVal){
            // alert('counter changed')
            // console.log('counter value changed')
            console.log(currentVal,prevVal)
            if (currentVal <0) {
                // alert('counter value is greater than 5')
                this.count = 0
            }
            if(prevVal ===10){
             console.log('old value is 10')
            }
    
        }
    }

}

    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
       
    </style>  