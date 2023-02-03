<template>
  <div
    data-cy="todo"
    class="todo"
  >
    <DoneBoard :done-items="items.doneItems" />
    <section
      class="todo__items"
      :class="{ todo_start: items.todoItems.length }"
    >
      <TodoList
        v-if="items.todoItems.length"
        :todo-items="items.todoItems"
        @check-todo-item="checkTodoItem"
      />
      <div
        v-else-if="loading"
        data-cy="loading"
      >
        Loading...
      </div>
      <div
        v-else-if="error"
        data-cy="error"
      >
        {{ error }}
      </div>
      <h2
        v-else
        data-cy="completed"
      >
        Hurray! I have cleared all todos.
      </h2>
    </section>
    <footer
      class="todo__footer"
      data-cy="footer"
    >
      Task Board by Nikhil D Anand
    </footer>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import DoneBoard from "@/components/DoneBoard.vue";
import TodoList from "@/components/TodoList.vue";

const items = reactive({ todoItems: [], doneItems: [] });
const loading = ref(false);
const error = ref("");

onMounted(async () => {
  try {
    loading.value = true;
    const response = await fetch(`https://dummyjson.com/todos`);
    const data = await response.json();
    items.todoItems = data.todos;
  } catch (_) {
    error.value = "Oops! Unexpected error occurs!";
  } finally {
    loading.value = false;
  }
});

const checkTodoItem = (id) => {
  const todoItemIndex = items.todoItems.findIndex((item) => item.id === id);
  const newTodoItems = items.todoItems.splice(todoItemIndex, 1);
  items.doneItems = [...items.doneItems, ...newTodoItems];
};
</script>

<style scoped lang="scss">
.todo {
  display: grid;
  min-height: 100vh;
  padding: 1rem;
  text-align: center;

  &__items {
    align-self: center;
  }

  &__footer {
    align-self: end;
  }

  &_start {
    align-self: start;
  }
}
</style>
