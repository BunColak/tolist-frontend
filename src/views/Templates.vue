<template>
  <div class="flex flex-grow">
    <my-templates-list />
    <list-template v-if="$route.params.id"/>
  </div>
</template>

<script>
import MyTemplatesList from '../components/MyTemplatesList.vue'
import ListTemplate from '../components/ListTemplate.vue'

export default {
  name: 'Templates',
  components: { MyTemplatesList, ListTemplate }
}
</script>
