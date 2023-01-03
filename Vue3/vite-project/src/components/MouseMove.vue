<script setup>
import {ref} from 'vue';
import {useMouse} from '../utils/useMouse';
let count = ref(1);
let color = ref('pink');

function add(){
  console.log(count)
  count.value++;
  color.value = Math.random()>0.5?'yellowgreen':'pink'
}
let {x,y} = useMouse()
</script>

<template>
    <div>
      <h1>当前横坐标的值为{{ x }}</h1>
      <h1>当前纵坐标的值为{{ y }}</h1>
      <h2 @click="add">点击此处切换颜色{{ count }}</h2>
    </div>
</template>

<style scoped>
  h1{
    color:plum;
  }
  h2{
    color:v-bind(color)
  }
</style>