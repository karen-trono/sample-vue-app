import Home from './Home.vue';
import Login from './Login.vue';
import Registration from './Registration.vue';
import Dashboard from './Dashboard.vue';
import CovidCases from './CovidCases.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/login', 
    component: function() {
      if(localStorage.getItem('loggedIn')) {
        window.location.href="/dashboard"
      }
      else {
        return Login
      }
    } 
  },
  { path: '/registration', 
    component: function() {
      if(localStorage.getItem('loggedIn')) {
        window.location.href="/dashboard"
      }
      else {
        return Registration
      }
    } 
  },
  { path: '/dashboard', 
    component: function() {
      if(localStorage.getItem('loggedIn')) {
        return Dashboard
      }
      else {
        window.location.href="/"
      }
    } 
  },
  { path: '/covid-cases', component: CovidCases }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

const app = Vue.createApp({})
app.use(router)
app.mount('#app')
