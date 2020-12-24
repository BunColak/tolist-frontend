<template>
  <div class="sidebar">
    <h3 class="font-lg font-bold">My Templates</h3>
    <div class="mt-4 flex flex-col">
      <router-link
        v-for="template in templates"
        :key="template.id"
        :to="`/templates/${template.id}`"
        class="my-4"
        active-class="font-bold"
        >{{ template.title }}</router-link
      >
    </div>
  </div>
</template>

<script>
import Query from '../graphql/MyListTemplates.gql'

export default {
  name: 'MyTemplatesList',
  apollo: {
    templates: {
      query: Query,
      update: (data) => data.myListTemplates
    }
  }
}
</script>
