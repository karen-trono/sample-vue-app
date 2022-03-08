<script setup>
import ButtonLink from './components/atoms/buttons/button_link.vue';
import ButtonSubmit from './components/atoms/buttons/button_submit.vue';
import ButtonCancel from './components/atoms/buttons/button_cancel.vue';
import FormInput from './components/atoms/form/input.vue';
import FormPassword from './components/atoms/form/password.vue';
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <h1>Let's be friends {{ firstName }} !</h1>
        <FormInput inputLabel="First Name" isRequired v-model="firstName" />
        <FormInput inputLabel="Last Name" isRequired v-model="lastName" />
        <FormInput inputLabel="User Name" isRequired v-model="username" />
        <FormPassword inputLabel="Password" isRequired v-model="password" />
        <FormPassword inputLabel="Confirm Password" isRequired v-model="passwordConfirm" />
        
        <div class="button-group">
          <ButtonCancel buttonText="Wait, let's go back" />
          <ButtonSubmit buttonText="I'll be your friend" @click="saveData"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passwordConfirm: '',
    }
  },
  methods: {
    saveData() {
      if(this.firstName && this.lastName && this.username && this.password && this.passwordConfirm) {
        if(this.password === this.passwordConfirm) {
          const passwordEncrypt = CryptoJS.AES.encrypt(this.password, 'passwordEncrypt');
          localStorage.setItem('firstName', this.firstName);
          localStorage.setItem('lastName', this.lastName);
          localStorage.setItem('username', this.username);
          localStorage.setItem('password', passwordEncrypt);
          localStorage.setItem('loggedIn', true);

          //go to dashboard
          this.$router.push('/dashboard');
        }
        else {
          alert('Passwords do not match.')
        }
      }
      else {
        alert('Kindly fill-out all required field');
      }
    }
  }
}
</script>

<style>
@import './assets/style.css';
</style>
