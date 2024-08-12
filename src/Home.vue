<template>
    <div id="app">
      <h1>Conversión de Distancia</h1>
      <form @submit.prevent="convertDistance">
        <div>
          <label for="inputDistance">Distancia:</label>
          <input type="number" v-model="inputDistance" id="inputDistance" required>
        </div>
        <div>
          <label for="inputUnit">Unidad de entrada:</label>
          <select v-model="inputUnit" id="inputUnit">
            <option value="m">Metros</option>
            <option value="km">Kilómetros</option>
            <option value="cm">Centímetros</option>
            <option value="mi">Millas</option>
            <option value="yd">Yardas</option>
            <option value="ft">Pies</option>
            <option value="in">Pulgadas</option>
          </select>
        </div>
        <div>
          <label for="outputUnit">Unidad de salida:</label>
          <select v-model="outputUnit" id="outputUnit">
            <option value="m">Metros</option>
            <option value="km">Kilómetros</option>
            <option value="cm">Centímetros</option>
            <option value="mi">Millas</option>
            <option value="yd">Yardas</option>
            <option value="ft">Pies</option>
            <option value="in">Pulgadas</option>
          </select>
        </div>
        <button type="submit">Convertir</button>
      </form>
      <div v-if="outputDistance !== null">
        <h2>Resultado: {{ outputDistance }} {{ outputUnit }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputDistance: 0,
        inputUnit: 'm',
        outputUnit: 'm',
        outputDistance: null
      }
    },
    methods: {
      convertDistance() {
        const conversionRates = {
          m: 1,
          km: 0.001,
          cm: 100,
          mi: 0.000621371,
          yd: 1.09361,
          ft: 3.28084,
          in: 39.3701
        };
  
        const distanceInMeters = this.inputDistance / conversionRates[this.inputUnit];
        this.outputDistance = distanceInMeters * conversionRates[this.outputUnit];
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
  