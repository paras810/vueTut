<template>
      <h2>props with example</h2>
      <!-- <Students name='Paras'/> -->
      <Students :name='newName'/>
      <Teacher name="Unknown" />
      
</template>

<script >
import Students from './students.vue';
import Teacher from './Teacher.vue';
    export default{
      data(){
        return{
          newName:'Mohan'
        }
      },
    components: { Students, Teacher },
   
}
    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
    </style>