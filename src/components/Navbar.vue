<template>
  <nav class="p-4 bg-indigo-700 text-white">
    <div class="mx-auto flex justify-between items-center">
      <div class="flex">
        <router-link to="/" class="font-semibold text-lg">ToList</router-link>
        <div>
          <router-link
            v-if="!this.$root.isLoggedIn"
            to="/features"
            class="text-lg ml-8"
            active-class="font-bold"
            >Features</router-link
          >
          <router-link
            to="/templates"
            class="text-lg ml-4"
            active-class="font-bold"
            >Templates</router-link
          >
        </div>
      </div>
      <div id="login-buttons" v-if="!this.$root.isLoggedIn">
        <button id="login" class="mx-4" @click="onLoginClick">Login</button>
        <button id="register" class="mx-4 border-2 px-2 py-1 rounded">
          Signup
        </button>
      </div>
    </div>
    <login v-show="showLogin && !this.$root.isLoggedIn" @close="onHideLogin" />
  </nav>
</template>

<script>
import Login from './Login'

export default {
  name: 'Navbar',
  components: {
    Login
  },
  data () {
    return {
      showLogin: false
    }
  },
  methods: {
    onLoginClick () {
      this.showLogin = true
    },
    onHideLogin () {
      this.showLogin = false
    }
  }
}
</script>
