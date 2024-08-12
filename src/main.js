// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './Home.vue'
import About from './About.vue'
import User from './User.vue'

const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/user', name: 'user', component: User }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')