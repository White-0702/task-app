<template>
    <div>
      <h2>登入</h2>
      <input v-model="username" placeholder="使用者名稱" />
      <input v-model="password" placeholder="密碼" type="password" />
      <button @click="login">登入</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const username = ref('')
  const password = ref('')
  const router = useRouter()
  
  const login = async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/Auth/login', {
        username: username.value,
        password: password.value
      })
      localStorage.setItem('token', res.data.token)
      router.push('/')
    } catch (err) {
      alert('登入失敗')
    }
  }
  </script>
  