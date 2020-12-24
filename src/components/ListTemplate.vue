<template>
  <div class="p-8" v-if="template">
    <div class="flex items-baseline">
      <h3 class="text-2xl font-bold">{{ template.title }}</h3>
      <p class="text-sm text-gray-600 ml-4">
        by
        <router-link class="link" :to="`/user/${template.user.id}`">{{
          template.user.username
        }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Query from '../graphql/ListTemplate.gql'

export default {
  name: 'ListTemplate',
  apollo: {
    template: {
      query: Query,
      variables () {
        return {
          id: Number(this.$route.params.id)
        }
      },
      update: (data) => data.listTemplate
    }
  }
}
</script>
