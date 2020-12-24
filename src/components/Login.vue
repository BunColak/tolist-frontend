<template>
  <div>
    <div class="fixed w-full h-full bg-gray-800 top-0 left-0 opacity-70"></div>
    <div
      class="fixed lg:w-1/2 lg:h-2/3 p-8 bg-white text-black opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded"
    >
      <form class="lg:w-2/5 mx-auto" @submit.prevent="onLoginSubmit">
        <h3 class="text-4xl text-center">Log In</h3>
        <ul class="mt-8 ml-4 text-red-700 list-disc" v-if="errorsMessages">
          <li v-for="error in errorsMessages" :key="error">{{ error }}</li>
        </ul>
        <div class="mt-4 flex flex-col">
          <div class="input-group">
            <label for="username"> Username </label>
            <input
              v-model="username"
              name="username"
              class="login-input"
              type="text"
            />
          </div>
          <div class="input-group">
            <label for="username"> Password </label>
            <input
              v-model="password"
              name="password"
              class="login-input"
              type="password"
            />
          </div>
          <button type="submit" class="button" @click="onLoginSubmit">
            Continue
          </button>
        </div>
        <div class="flex mt-8 items-center justify-center">
          <div class="h-px w-1/3 bg-gray-400" />
          <span class="mx-8">OR</span>
          <div class="h-px w-1/3 bg-gray-400" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LoginMutation from '../graphql/LoginMutation.gql'
import { onLogin } from '../vue-apollo'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      submitting: false,
      errorsMessages: []
    }
  },
  methods: {
    async onLoginSubmit () {
      this.submitting = true
      try {
        const results = await this.$apollo.mutate({
          mutation: LoginMutation,
          variables: {
            username: this.username,
            password: this.password
          }
        })
        const token = results.data.login.token
        onLogin(token)
        this.$root.token = token
      } catch (e) {
        if (e.graphQLErrors) {
          this.errorsMessages = e.graphQLErrors.map((er) => er.message)
        } else {
          console.log(e)
        }
      }
      return null
    }
  }
}
</script>

<style scoped>
.input-group {
  @apply flex flex-col mt-4;
}

.login-input {
  @apply border-2 rounded py-2 px-4 mt-2 focus:ring-indigo-300 focus:ring-2;
}
</style>
