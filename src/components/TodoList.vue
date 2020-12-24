<template>
  <div v-if="todoList" class="p-8 w-full">
    <div class="flex items-baseline">
      <h3 class="text-3xl font-bold">{{ todoList.title }}</h3>
      <p class="ml-4 text-sm text-gray-600">
        from
        <router-link class="link" :to="`/templates/${todoList.template.id}`"
          >{{ todoList.template.title }} </router-link
        >by
        <router-link class="link" :to="`/user/${todoList.template.user.id}`">{{
          todoList.template.user.username
        }}</router-link>
      </p>
    </div>
    <div class="mt-8">
      <todo-item
        data-testId="todo"
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggleTodo="toggleTodo"
      />
    </div>
    <div v-if="completedTodos.length" class="mt-8">
      <h4 class="text-xl font-bold">Completed</h4>
      <todo-item
        data-testId="completed-todo"
        v-for="todo in completedTodos"
        :key="todo.id"
        :todo="todo"
        @toggleTodo="toggleTodo"
      />
    </div>
  </div>
</template>

<script>
import TodoListQuery from '../graphql/TodoList.gql'
import ToogleTodoMutation from '../graphql/ToogleTodoMutation.gql'
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  apollo: {
    todoList: {
      query: TodoListQuery,
      variables () {
        return {
          id: Number(this.$route.params.id)
        }
      }
    }
  },
  computed: {
    todos () {
      if (this.todoList) {
        return this.todoList.todos
          .filter((t) => !t.completed)
          .sort((a, b) => a.id - b.id)
      }
      return []
    },
    completedTodos () {
      if (this.todoList) {
        return this.todoList.todos
          .filter((t) => t.completed)
          .sort((a, b) => a.id - b.id)
      }
      return []
    },
    listId () {
      return this.$route.params.id
    }
  },
  methods: {
    async toggleTodo (id) {
      try {
        await this.$apollo.mutate({
          mutation: ToogleTodoMutation,
          variables: { id }
        })
        this.$apollo.queries.todoList.refetch()
      } catch (e) {
        console.log(e)
      }
    }
  },
  watch: {
    listId () {
      this.$apollo.queries.todoList.refetch()
    }
  }
}
</script>
