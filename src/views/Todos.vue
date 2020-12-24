<template>
  <div class="flex flex-grow">
    <div v-if="this.$root.isLoggedIn" class="flex items-stretch w-full">
      <todo-lists />
      <todo-list v-if="$route.params.id" />
      <div v-else class="p-8">No List selected</div>
    </div>
    <div v-else>hello</div>
  </div>
</template>

<script>
import TodoLists from '../components/TodoLists.vue'
import TodoList from '../components/TodoList.vue'
export default {
  name: 'Todos',
  components: { TodoLists, TodoList }
}
</script>
