<script setup>
import ButtonLink from './components/atoms/buttons/button_link.vue';
import ButtonPrimary from './components/atoms/buttons/button_primary.vue';
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
				<div class="controls">
					<ButtonPrimary buttonText="Logout" @click="logout"/>
				</div>
        <h1>{{ getGreetings }}, {{ firstName }} !</h1>
        <h4>Here's some information I can give you for today</h4>

        <div class="button-group">
          <ButtonLink buttonText="Covid cases" urlPath="covid-cases" />
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
    }
  },
	mounted() {
		this.firstName = localStorage.getItem('firstName');
	},
	methods: {
		logout() {
			localStorage.removeItem('loggedIn');
			this.$router.push('/');
		}
	},
  computed: {
		getGreetings() {
			const currentHour = new Date().getHours();
			if(currentHour < 12) {
				return "Good Morning"
			}
			else if(currentHour >= 12 && currentHour < 18) {
				return "Good Afternoon"
			}
			else if(currentHour >= 18) {
				return "Good Evening"
			}
		}
	}
}
</script>

<style>
@import './assets/style.css';

.controls {
	position: fixed;
	top: 5px;
	right: 5px;
}
</style>
