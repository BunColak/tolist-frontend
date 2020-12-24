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
  name: 'Home',
  components: { TodoLists, TodoList },
  data () {
    return {
      selectedList: null
    }
  },
  methods: {
    selectList (id) {
      this.selectedList = id
    }
  }
}
</script>
