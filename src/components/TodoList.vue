<template>
  <main>
    <h2>To Do</h2>
    <ul class="list">
      <li
        v-for="(item, index) in todoItems"
        :key="item.id"
        class="list__item"
      >
        <input
          :id="item.id"
          type="checkbox"
          class="list__item-checkbox"
          @change="emit('checkTodoItem', item.id)"
        >
        <label
          :for="item.id"
          class="list__item-data"
        >
          <div>{{ index + 1 }}.</div>
          <p class="list__item-todo">{{ item.todo }}</p>
        </label>
      </li>
    </ul>
  </main>
</template>

<script setup>
defineProps({
  todoItems: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["checkTodoItem"]);
</script>

<style scoped lang="scss">
.list {
  background-color: var(--grey);
  padding: var(--gap);
  text-align: left;

  &__item {
    display: flex;
    align-items: flex-start;
    background-color: var(--white);
    list-style-type: none;

    & > * {
      cursor: pointer;
    }

    &:not(:last-child) {
      margin-block-end: var(--gap);
    }

    &-checkbox {
      margin-inline-end: 0.5rem;
      margin-block-start: 0.3rem;
    }

    &-data {
      display: flex;
      flex-grow: 1;
    }

    &-todo {
      margin-block: 0;
    }
  }
}

</style>
