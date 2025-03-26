<template>
    <div>
      <h2>我的任務</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.title }} - {{ task.status }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const tasks = ref([])
  
  onMounted(async () => {
    const token = localStorage.getItem('token')
    const res = await axios.get('http://localhost:5001/api/Tasks', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    tasks.value = res.data
  })
  </script>
  