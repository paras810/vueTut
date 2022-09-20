<template>
      <h2>Computed property</h2>
      <h4>{{(dollars*rupeeVal)-dis}}</h4>
      <h4>{{calDis2}}</h4>
      <h4>{{calDis()}}</h4>
</template>

<script >
export default{
    data() {
        return {
           dollars:100,
           rupeeVal:70,
           dis:10,
        }
    },
    methods:{
        calDis(){
          let res=  (this.dollars*this.rupeeVal)-this.dis
          return res
        }
    },
 computed:{
    calDis2(){
        let res2 = (this.dollars*this.rupeeVal)-this.dis
        return res2
    }
 }

}

    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
       
    </style>  