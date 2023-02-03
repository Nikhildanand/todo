<template>
  <main>
    <h2>
      {{ boardTitle }}
    </h2>
    <section class="board">
      <div class="board__grid">
        <div
          v-for="item in doneItems"
          :key="item.id"
        >
          <div class="board__item">
            {{ item.todo }}
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
  doneItems: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const boardTitle = computed(() => {
  return props.doneItems.length ? "I did it!" : "Let's start"
})
</script>

<style scoped lang="scss">
.board {
  height: min(30rem, 60vh);
  background-color: var(--tea-green);
  min-width: 9rem;
  overflow: auto;

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(13rem, 15vh), 1fr));
    grid-gap: var(--gap);
    padding: min(3rem, 2vh);
    margin: min(3rem, 2vh);
  }

  &__item {
    background-color: var(--white);
    padding: var(--gap);
    border-radius: 0.5rem;
    box-shadow: 2px 2px 10px var(--shadow);
    height: 100%;
    text-align: left;
  }
}
</style>
