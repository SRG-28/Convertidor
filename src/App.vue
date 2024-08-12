<!-- src/App.vue -->
<template>
    <h1>{{message}}</h1>
      <h3><router-link to="/home">Distancia</router-link><br><br>
      <router-link to="/about">Temperatura</router-link><br><br>
      <router-link to="/user">Peso</router-link><br><br></h3>
    
    <router-view></router-view>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Vite app para conversiones'
      }
    }
  }
  </script>