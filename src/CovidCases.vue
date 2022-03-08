<script setup>
import ButtonPrimary from './components/atoms/buttons/button_primary.vue';
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <h1>Covid Cases in *get country name*</h1>
        <h4>Select a country</h4>

        <div class="button-group">
          <ButtonPrimary buttonText="Philippines" @click="getCovidData"/>
          <ButtonPrimary buttonText="Japan" @click="getCovidDataJP"/>
        </div>

        <img :src="chartURL" class="covid-chart" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartURL: '',
    }
  },
  methods: {
    getCovidData() {
      this.chartURL = "https://corona.dnsforfamily.com/graph.png?c=PH"
    },
    getCovidDataJP() {
      this.chartURL = "https://corona.dnsforfamily.com/graph.png?c=JP"
    }
  }
}
</script>

<style>
@import './assets/style.css';

.covid-chart {
  width: 100%;
  height: auto;
  margin-top: 40px;
}
</style>
