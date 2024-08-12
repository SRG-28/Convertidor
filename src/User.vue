<template>
    <div id="app">
      <h1>Conversión de Peso</h1>
      <form @submit.prevent="convertWeight">
        <div>
          <label for="inputWeight">Peso:</label>
          <input type="number" v-model="inputWeight" id="inputWeight" required>
        </div>
        <div>
          <label for="inputUnit">Unidad de entrada:</label>
          <select v-model="inputUnit" id="inputUnit">
            <option value="kg">Kilos</option>
            <option value="g">Gramos</option>
            <option value="ton">Toneladas métricas</option>
            <option value="lb">Libras</option>
            <option value="oz">Onzas</option>
          </select>
        </div>
        <div>
          <label for="outputUnit">Unidad de salida:</label>
          <select v-model="outputUnit" id="outputUnit">
            <option value="kg">Kilos</option>
            <option value="g">Gramos</option>
            <option value="ton">Toneladas métricas</option>
            <option value="lb">Libras</option>
            <option value="oz">Onzas</option>
          </select>
        </div>
        <button type="submit">Convertir</button>
      </form>
      <div v-if="outputWeight !== null">
        <h2>Resultado: {{ outputWeight }} {{ outputUnit }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputWeight: 0,
        inputUnit: 'kg',
        outputUnit: 'kg',
        outputWeight: null
      }
    },
    methods: {
      convertWeight() {
        const conversionRates = {
          kg: 1,
          g: 1000,
          ton: 0.001,
          lb: 2.20462,
          oz: 35.274
        };
  
        const weightInKg = this.inputWeight / conversionRates[this.inputUnit];
        this.outputWeight = weightInKg * conversionRates[this.outputUnit];
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  div {
    margin-bottom: 10px;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  