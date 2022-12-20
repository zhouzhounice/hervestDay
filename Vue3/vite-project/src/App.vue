<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/Todolist.vue';
</script>

<template>
  <div>
   <h1>这是首页</h1>
    <TodoList />
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
