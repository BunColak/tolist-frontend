<template>
  <div v-if="todoList" class="p-8 w-full">
    <div class="flex items-baseline">
      <h3 class="text-3xl font-bold">{{ todoList.title }}</h3>
      <p class="ml-4 text-sm text-gray-600">
        from
        <a class="link">{{ todoList.template.title }} </a>by
        <a class="link">{{ todoList.template.user.username }}</a>
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
  // props: {
  //   id: Number
  // },
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
  }
}
</script>
