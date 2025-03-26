import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import TaskList from '../views/TaskList.vue'

const routes = [
  { path: '/', component: TaskList },
  { path: '/login', component: LoginView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})