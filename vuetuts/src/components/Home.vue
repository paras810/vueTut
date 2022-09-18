<template>
      <h2>form</h2>
      <form>
      <label for="email" >Email : </label>
      <input v-model="form.email" type="text" id="email" placeholder="enter your email">
      <br> <br>

      <label for="password">Password : </label>
      <input v-model="form.password" type="password"  id="password" placeholder="enter your password">
      <br> <br>

      <h3>Country</h3>
      <select v-model="form.country" id="tech">
        <option value="india">India</option>
        <option value="Usa">USA</option>
      </select>

      <br>
      <h2>Technology</h2>
      <label for="php">php</label>
      <input type="checkbox"  id="php" v-model="form.technology" value="PHP" ><br>

      <label for="Vue">Vue</label>
      <input type="checkbox"  id="Vue" v-model="form.technology" value="VUE" ><br>

<br>

   <h3>Gender</h3>
   <label for="male">male</label>
   <input type="radio" name="gender" id="male" value="Male" v-model="form.gender"><br>
   <label for="female">female</label>
   <input type="radio" name="gender" id="female" value="Female" v-model="form.gender"><br>
   <label for="other">other</label>
   <input type="radio" name="gender" id="other" value="Other" v-model="form.gender"><br>
<br><br>
       <button @click="login" type="button">Login</button><br><br>
          <ol>
            <li v-for="(item, index) in err" :key="index" > {{item}} not valid</li>
          </ol>
          <br>
    </form>
    <h1>{{Sub}}</h1>
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
        },
        err:[],
        Sub:''
        }
    },
    methods:{
        login(){
            this.err = []
            for(const item in this.form){
                if(this.form[item]==='' || this.form[item].length === 0 ){
                  this.err.push(item)
                }
                if (this.err.length === 0) {
                    this.Sub = 'FORM SUBMITTED'
                }
            }
            console.log('data = ', this.form, this.err)
        console.log(this.err.length)
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