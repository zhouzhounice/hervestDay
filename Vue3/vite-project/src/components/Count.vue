<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';

let store = useStore()
let count = computed(()=>store.state.count);
let double = computed(()=>store.getters.double)
function add(){
  store.commit('add')
}
function asyncAdd(){
  store.dispatch('asyncAdd')
}
</script>

<template>
    <div @click="add">
      {{ count }}

      <button @click="asyncAdd">延迟添加</button>
    </div>
</template>

<style  scoped>

</style>