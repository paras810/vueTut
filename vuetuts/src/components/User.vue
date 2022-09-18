<template >
   <div>
<h3 v-bind="$attrs">paras</h3>
<h3>anuj</h3>
<h3>rohan</h3>
<h4>{{data}}</h4>
</div>
</template> 

<script>
    export default {
      props:{
      data:String
      },
      inheritAttrs:false
    };

</script>