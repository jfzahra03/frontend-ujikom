<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('URL_API_LOGIN', {
            email: this.email,
            password: this.password
          });
          if (response.data.success) {
            // Handle successful login, e.g., redirect to dashboard
            console.log('Login successful');
          } else {
            this.error = 'Invalid email or password';
          }
        } catch (error) {
          console.error('Error during login:', error);
          this.error = 'Internal server error';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  