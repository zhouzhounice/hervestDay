<template>
    <div>
      <h1>{{pageId}}</h1>
      Appconfig
    </div>
</template>

<script setup>
import { useRouter  } from 'vue-router'
import {onBeforeMount} from "@vue/runtime-core";
import {ref} from "vue";

const appId  = ref('')
const pageId = ref('')

onBeforeMount(()=>{
  console.log('onBeforeMount',)
  const $router = useRouter();
  console.log('$router:', $router.currentRoute.value.params);
  appId.value = $router.currentRoute.value.params.appId
  pageId.value = $router.currentRoute.value.params.pageId
  console.log('pageId',pageId.value)
})


</script>

<style scoped>

</style>
