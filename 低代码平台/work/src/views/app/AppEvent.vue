<template>
    <div>
      AppEvent
    </div>
</template>

<script setup>
import { useRouter  } from 'vue-router'
import {onBeforeMount} from "@vue/runtime-core";

onBeforeMount(()=>{
  console.log('onBeforeMount',)
  const $router = useRouter();
  console.log('$router:', $router.currentRoute.value.params);
})


</script>

<style scoped>

</style>
