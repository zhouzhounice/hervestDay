<script setup>
import {ref, computed, watchEffect} from 'vue';
// import { useFullscreen } from '@vueuse/core';
import {useMouse} from '../index/useMouse';
let count = ref(1);
let color = ref('pink');

let doubel = computed(()=>count.value * 2)

function add(){
  count.value++;
  color.value = Math.random()>0.5?'yellowgreen':'pink'
}
let {x,y} = useMouse()
// const {isFullscreen,enter,exit,toggle} = useFullscreen()

</script>

<template>
    <div>
      <h1>当前横坐标的值为{{ x }}</h1>
      <h1>当前纵坐标的值为{{ y }}</h1>
      <h2 @click="add">点击此处切换颜色{{ count }}</h2>
      <p>{{ count }} × 2 = {{ doubel }}</p>
      <button>点我全屏</button>
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
