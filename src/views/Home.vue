<template>
  <div class="bg-gray-400">
    <div v-for="user in users" :key="user.id">{{ user.username }}</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Home',
  mounted () {
    console.log(this.users)
  },
  apollo: {
    users: gql`
      {
        users {
          id
          username
        }
      }
    `
  }
}
</script>
