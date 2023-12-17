<template>
  <div>
    <button @click="counterStore.increment">{{ counterStore.count }}</button>
    <button @click="counterStore.doubleCount">{{ counterStore.count }}</button>
  </div>
</template>

<script>
import { usedefineStore } from "./stores/counter";
export default {
  setup() {
    const counterStore = usedefineStore();
    console.log(counterStore);
    return {
      counterStore,
    }
  }
}
</script>

<style scoped></style>