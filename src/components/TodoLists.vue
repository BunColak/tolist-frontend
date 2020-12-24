<template>
  <aside class="sidebar">
    <h4 class="font-bold text-lg">Todo Lists</h4>
    <div class="flex flex-col mt-4">
      <router-link
        class="py-4 cursor-pointer hover:underline"
        v-for="list in myTodoLists"
        :key="list.id"
        :to="`/${list.id}`"
        active-class="font-bold"
      >
        {{ list.title }}
      </router-link>
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
  }
}
</script>
