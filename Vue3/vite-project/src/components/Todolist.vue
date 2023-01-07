<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button  @click="clear">清理</button>
    <ul v-if="todos.length">
     <transition-group name="flip-list" tag="ul"> 
      <li v-for="(todo,i) in todos" :key="todo.key">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
        <span class="remove-btn" @click="removeTodo($event,i)">×</span>
      </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone">
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
</template>

<script setup>
import {useTodos} from '../utils/useTodos'

function removeTodo(e,i){ 
  console.log(i)
  todos.value.splice(i,1) 
}
let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
</script>

<style scoped>
.flip-list-move{
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active{
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
.remove-btn {
  margin-left: 30px;
  color:red;
}
</style>