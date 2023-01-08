<template>
  <div class='container'>
    <h1 class="hover" @click="toHome">Home</h1>
    <h1>|</h1>
    <h1 class="hover" @click="toAbout">About</h1>
  </div>
</template>


<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
const toHome = () =>{
  router.push('/')
}
const toAbout = () =>{
  router.push('/about')
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