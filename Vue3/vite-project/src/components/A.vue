<template>
    <div>
      <h1>过渡动画</h1>
      <button @click="toggle">click</button>
      <transition name="fade">
        <h1 v-if='showTitle'>你好</h1>
      </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let showTitle = ref(true);
function toggle(){
  showTitle.value = !showTitle.value
}
</script>



<style scoped>
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>