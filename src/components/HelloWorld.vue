<script setup lang="ts">
import { ref } from "vue";

const addCount = () => {
  count.value++;
};
defineProps<{ msg: string }>();

const count = ref<number>(0);
</script>

<template>
  <h1>{{ count }}</h1>
  <div @click="addCount">点击</div>
</template>

<style scoped>

</style>
