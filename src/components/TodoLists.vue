<template>
  <aside class="flex flex-col bg-gray-800 text-white p-4 w-1/6 flex-shrink-0">
    <h4 class="ml-4 mt-4 font-bold text-lg">Todo Lists</h4>
    <div
      class="p-4 cursor-pointer hover:underline"
      v-for="list in myTodoLists"
      :key="list.id"
      @click="selectList(list.id)"
    >
      {{ list.title }}
    </div>
  </aside>
</template>

<script>
import MyTodoLists from '../graphql/MyTodoLists.gql'

export default {
  name: 'TodoLists',
  apollo: {
    myTodoLists: {
      query: MyTodoLists
    }
  },
  methods: {
    selectList (id) {
      this.$emit('selectList', id)
    }
  }
}
</script>
