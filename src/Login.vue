<script setup>
import ButtonSubmit from './components/atoms/buttons/button_submit.vue';
import ButtonCancel from './components/atoms/buttons/button_cancel.vue';
import FormInput from './components/atoms/form/input.vue';
import FormPassword from './components/atoms/form/password.vue';
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <h1>Nice to see you again!</h1>
        <FormInput inputLabel="Username" v-model="username" />
        <FormPassword inputLabel="Password" v-model="password" />
        <div class="button-group">
          <ButtonCancel buttonText="Wait, let's go back" />
          <ButtonSubmit buttonText="Let's get started" @click="checkUser" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    checkUser() {
      if(this.username && this.password) {
        const recordedUsername = localStorage.getItem('username');
        const recordedPassword = localStorage.getItem('password');
        const passwordEncrypted = CryptoJS.AES.decrypt(recordedPassword.toString(), 'passwordEncrypt');
        const passwordDecrypted = passwordEncrypted.toString(CryptoJS.enc.Utf8);
        if(this.username === recordedUsername && this.password == passwordDecrypted) {
          localStorage.setItem('loggedIn', true);
          this.$router.push('/dashboard');
        }
        else {
          alert('This user does not exist.')
        }
      }
    }
  }
}
</script>

<style>
@import './assets/style.css';
</style>
