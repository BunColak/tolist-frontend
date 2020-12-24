import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider, AUTH_TOKEN } from './vue-apollo'

Vue.config.productionTip = false
const userToken = localStorage.getItem(AUTH_TOKEN)

new Vue({
  router,
  apolloProvider: createProvider(),
  data: {
    token: userToken
  },
  computed: {
    isLoggedIn () {
      return this.token
    }
  },
  render: h => h(App)
}).$mount('#app')
