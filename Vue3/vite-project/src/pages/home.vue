<template>
  <div class='container'>
    <h1 class="hover" @click="toHome">Home</h1>
    <h1>|</h1>
    <h1 class="hover" @click="toAbout">About</h1>

    <button @click="handle">点我</button>
  </div>
</template>


<script setup>
import { useRouter } from "vue-router";
import toArry from '../utils/test';
const router = useRouter()

const obj = {
  'obj1':[
    {
      statName:"smoke",
      statTime:"2023-01-84",
      statValue:0,
    },
    {
      statName:"smoke",
      statTime:"2023-01-84",
      statValue:20,
    },
  ],
  'obj2':[
    {
      statName:"smoke",
      statTime:"2023-01-84",
      statValue:30,
    },
    {
      statName:"smoke",
      statTime:"2023-01-84",
      statValue:40,
    },
  ],

}
const toHome = () =>{
  router.push('/')
}
const toAbout = () =>{
  router.push('/about')
}
const handle = () =>{
  toArry(obj)
}
</script>



<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  width: 300px;
}
.hover{
  cursor: pointer;
  text-decoration: underline;
}
.hover:hover {
  color:  #646cffaa;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>