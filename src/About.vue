<template>
    <div id="app">
      <h1>Conversión de Temperaturas</h1>
      <form @submit.prevent="convertTemperature">
        <div>
          <label for="inputTemperature">Temperatura:</label>
          <input type="number" v-model="inputTemperature" id="inputTemperature" required>
        </div>
        <div>
          <label for="inputUnit">Unidad de entrada:</label>
          <select v-model="inputUnit" id="inputUnit">
            <option value="C">Celsius</option>
            <option value="K">Kelvin</option>
            <option value="F">Fahrenheit</option>
          </select>
        </div>
        <div>
          <label for="outputUnit">Unidad de salida:</label>
          <select v-model="outputUnit" id="outputUnit">
            <option value="C">Celsius</option>
            <option value="K">Kelvin</option>
            <option value="F">Fahrenheit</option>
          </select>
        </div>
        <button type="submit">Convertir</button>
      </form>
      <div v-if="outputTemperature !== null">
        <h2>Resultado: {{ outputTemperature }} {{ outputUnit }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputTemperature: 0,
        inputUnit: 'C',
        outputUnit: 'C',
        outputTemperature: null
      }
    },
    methods: {
      convertTemperature() {
        let tempInCelsius;
  
        if (this.inputUnit === 'C') {
          tempInCelsius = this.inputTemperature;
        } else if (this.inputUnit === 'K') {
          tempInCelsius = this.inputTemperature - 273.15;
        } else if (this.inputUnit === 'F') {
          tempInCelsius = (this.inputTemperature - 32) * 5/9;
        }
  
        if (this.outputUnit === 'C') {
          this.outputTemperature = tempInCelsius;
        } else if (this.outputUnit === 'K') {
          this.outputTemperature = tempInCelsius + 273.15;
        } else if (this.outputUnit === 'F') {
          this.outputTemperature = (tempInCelsius * 9/5) + 32;
        }
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
  