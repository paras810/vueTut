<template>
    <ol>
      <h3>Loop</h3>
       <li v-for="val in arrayy" :key="val">{{val}}</li><br>
       <li v-for="val2 in newUser" :key="val2">Name = {{val2.name}}, and Email = {{val2.email}}.</li>
    </ol>
</template>
<script>
    export default{ 
        name:'home',
        data(){
          return{
            arrayy:['array!','Newarray#','conditions','else',22],
            newUser:[{
              name: 'paras',
              location: 'delhi'
              ,email: 'paras.com'
            },
            {
              name: 'rohan',
              location: 'gurgaon'
              ,email: 'rohan.com'
            },
            {
              name: 'mohan',
              location: 'punjab'
              ,email: 'mohan.com'
            },
            {
              name: 'anuj',
              location: 'goa'
              ,email: 'anuj.com'
            },

          ]
          }
        }
    }
    </script>
    <style scoped>
        h3{
            color: rgb(82, 37, 243);
        }
    </style>