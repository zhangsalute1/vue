<template>
  <div>
    <a-button @click="counterStore.increment">{{ count }}</a-button>
    <a-badge :count="doubleCount" style="margin: 0 10px;" />
    <ul>
      <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { usedefineStore } from "./stores/counter";
import { onMounted } from "vue";
import { Button, Badge, List } from 'ant-design-vue';
import { storeToRefs } from "pinia";
export default {
  components: {
    'a-button': Button,
    'a-badge': Badge,
    'a-list': List,
    'a-list-item': List.Item
  },
  setup() {
    const counterStore = usedefineStore();
    const { count, doubleCount } = storeToRefs(counterStore);

    onMounted(() => {
      counterStore.getList()
    });

    return {
      counterStore,
      count,
      doubleCount
    }
  }
}
</script>

<style scoped></style>