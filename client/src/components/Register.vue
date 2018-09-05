<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      firstname: "",
      lastname: ""
    }
  },
  methods: {
      async register() {
          const reponse = await AuthenticationService.register({
              firstname: this.firstname,
              lastname: this.lastname
          })
          console.log('Added user', reponse.data)
      },
      async retrieve() {
          const response = await AuthenticationService.retrieve()
          console.log('Retrieved user', response.data)
      }
  }
};
</script>

<template>
  <!-- <div>
    <h1>Register</h1>

    <input 
    type="email" 
    name="email"
    v-model="email"
    placeholder="email">

    <br>

    <input 
    type="password" 
    name="password"
    v-model="password"
    placeholder="password">

    <br>
    <br>

    <button
        @click="register">Register</button>

  </div> -->
  <div>
    <h1>Add/Retrieve Users</h1>

    <input 
    type="text" 
    name="firstname"
    v-model="firstname"
    placeholder="enter your first name">

    <br>

    <input 
    type="text" 
    name="lastname"
    v-model="lastname"
    placeholder="enter your last name">

    <br>
    <br>

    <button
        @click="register">Add User</button>
      
    <button
        @click="retrieve">Get User</button>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>