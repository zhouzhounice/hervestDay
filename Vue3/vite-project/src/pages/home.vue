<template>
  <div class='container'>
    <h1>我是首页！</h1>
  </div>
</template>


<script setup>



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