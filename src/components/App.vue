<template>
  <div class="container">
    <div class="auth-card">
      <h2>Login or Create Account</h2>
      <input v-model="username" placeholder="Username" class="input" />
      <input v-model="password" type="password" placeholder="Password" class="input" />
      <div class="button-group">
        <button @click="makeRequest('/user/account/access')" class="btn primary">Login</button>
        <button @click="makeRequest('/user/account/create')" class="btn">Create Account</button>
      </div>
    </div>
    <div class="actions">
      <button @click="makeRequest('/user/account/logout', false)" class="btn">Logout</button>
      <button @click="makeRequest('/user/save-slots/access', false)" class="btn">Privileged Request</button>
    </div>
    <div class="result" v-if="result">
      <h3>Result</h3>
      <pre>{{ formattedResult }}</pre>
    </div>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  name: "App",
  data() {
    return {
      username: '',
      password: '',
      result: null
    };
  },
  computed: {
    formattedResult() {
      return typeof this.result === 'string'
        ? this.result
        : JSON.stringify(this.result, null, 2);
    }
  },
  methods: {
    async makeRequest(endpoint, includeCredentials = true) {
      try {
        const payload = includeCredentials ? {
          username: this.username,
          userPassword: this.password
        } : {};
        
        const response = await axios.post(endpoint, payload, { withCredentials: true });
        this.result = response.data;
      } catch (error) {
        this.result = error.response?.data || error.message;
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.auth-card {
  margin-bottom: 20px;
}

.input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.btn.primary {
  background-color: #4CAF50;
  color: white;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.result {
  margin-top: 24px;
  padding: 16px;
  background: #f6f8fa;
  border-radius: 6px;
  border: 1px solid #e1e4e8;
}

.result pre {
  margin: 0;
  font-size: 14px;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
}
</style>