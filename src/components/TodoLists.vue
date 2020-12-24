<template>
  <aside class="flex flex-col bg-gray-800 text-white p-4 w-1/6">
    Todo Lists
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
      query: MyTodoLists,
      result () {
        if (this.myTodoLists.length > 0) {
          this.selectList(this.myTodoLists[1].id)
        }
      }
    }
  },
  methods: {
    selectList (id) {
      this.$emit('selectList', id)
    }
  }
}
</script>
