<template>
  <div>
    <label :class="todo.completed ? 'line-through' : ''">
      <input
        type="checkbox"
        v-model="todo.completed"
        @change="toggleTodo"
      />
      {{ todo.text }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object
  },
  methods: {
    toggleTodo () {
      this.$emit('toggleTodo', this.todo.id)
    }
  }
}
</script>
