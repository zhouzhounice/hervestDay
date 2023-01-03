<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button  @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.key">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
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

let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
</script>