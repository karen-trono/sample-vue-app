<script setup>
import ButtonLink from './components/atoms/buttons/button_link.vue';
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <h1>Hello there!</h1>
        <h4>Do I already know you?</h4>
        <div class="button-group">
          <ButtonLink buttonText="Yes, you do" urlPath="login" />
          <ButtonLink buttonText="Not yet" urlPath="registration"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import './assets/style.css';
</style>
