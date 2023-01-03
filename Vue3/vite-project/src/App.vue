<script setup>
import { ref } from 'vue';
import TodoList from './components/Todolist.vue';
import MouseMove from './components/MouseMove.vue';
import Rate from './components/Rate.vue';

let score = ref(3)
</script>

<template>
  <div>
   <h1>这是首页</h1>
    <TodoList />
    <hr />
    <MouseMove />
    <hr />
    <Rate :value="0" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
