<template>
      <h2>class Binding</h2>
      <!-- <div class="green">component</div> -->
      <div :class="applyStyle">component</div>
      <button @click="colorFull=!colorFull">toggle background-color</button>
      
</template>

<script >
    export default{
   data(){
    return{
      colorFull:false
    }
   },
   computed:{
    applyStyle(){
      return{
        green:this.colorFull,
        error:!this.colorFull,
        other:this.colorFull
        
      }
    }
   }

}
    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
        .green{
          color: greenyellow;
        }
        .error{
          background-color: rgb(228, 131, 131) ;
        }
        .other{
          font-size: 20px;
        }
    </style>