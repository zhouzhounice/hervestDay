<template>
  <div>
   <h1>点击进入首页</h1>
    <TodoList />
    <hr />
    <MouseMove />
    <hr />
    <Rate :value="score" @update-rate="update" />
    <hr />
    <A />
    <h1>啦啦啦</h1>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import TodoList from './components/Todolist.vue';
import MouseMove from './components/MouseMove.vue';
import Rate from './components/Rate.vue';
import A from './components/A.vue';

let score = ref(3.5);

function update(num){
  score.value = num
}
</script>



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
