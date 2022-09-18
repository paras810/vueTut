<template>
      <h2>form</h2>
      <form>
      <label for="email" >Email : </label>
      <input v-model="form.email" type="text" id="email" placeholder="enter your email">
      <br> <br>

      <label for="password">Password : </label>
      <input v-model="form.password" type="password"  id="password" placeholder="enter you password">
      <br> <br>
      <select v-model="form.country" >
        <option value="india">India</option>
        <option value="Usa">USA</option>
        <option value="england">England</option>
      </select>

      <h3>Technology</h3>
      <label for="php">php</label>
      <input type="checkbox"  id="php" v-model="form.technology" value="PHP" >

      <label for="Vue">Vue</label>
      <input type="checkbox"  id="Vue" v-model="form.technology" value="VUE" >

      <label for="java">java</label>
      <input type="checkbox"  id="java" v-model="form.technology" value="JAVA" >
      
      <label for="nodeJs">nodeJs</label>
      <input type="checkbox"  id="nodeJs" v-model="form.technology" value="NODEJS" >
<br>

   <h3>Gender</h3>
   <label for="male">male</label>
   <input type="radio" name="gender" id="male" value="Male" v-model="form.gender">
   <label for="female">female</label>
   <input type="radio" name="gender" id="female" value="Female" v-model="form.gender">
   <label for="other">other</label>
   <input type="radio" name="gender" id="other" value="Other" v-model="form.gender">
<br><br>
       <button @click="login" type="button">Login</button><br><br>
          <p>{{form}} </p>
          <br>
    </form>
</template>

<script >
export default{
    data(){
        return{
        form:{
            email:'',
            password:'',
            country:'',
            technology:[],
            gender:''
        }
        }
    },
    methods:{
        login(){
            console.log('data = ', this.form)
        
        }
    }
}

    </script>
    <style scoped>
        h2{
            color: rgb(82, 37, 243);
        }
        label{
            margin: .5rem 1rem;
        }
    </style>