<template>
  <div class="flex flex-grow">
    <div v-if="this.$root.isLoggedIn" class="flex items-stretch w-full">
      <todo-lists @selectList="selectList" />
      <todo-list v-if="selectedList" :id="selectedList"/>
      <div v-else>No List selected</div>
    </div>
    <div v-else>hello</div>
  </div>
</template>

<script>
import TodoLists from '../components/TodoLists.vue'
import TodoList from '../components/TodoList.vue'
export default {
  name: 'Todos',
  components: { TodoLists, TodoList },
  data () {
    return {
      selectedList: this.$route.params.id ? Number(this.$route.params.id) : null
    }
  },
  methods: {
    selectList (id) {
      this.selectedList = id
      this.$router.replace(`/${id}`)
    }
  }
}
</script>
