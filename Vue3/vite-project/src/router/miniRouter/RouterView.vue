<script setup>
import {computed} from 'vue';
import { useRouter } from '../miniRouter/index';
let router = useRouter();

const comp = computed(()=>{
  const route = router.routes.find(
    (route) => route.path === router.current.value
  )
  return route?route.component:null;
})
</script>

<template>
    <component :is="comp"></component>
</template>

<style lang='less' scoped>

</style>