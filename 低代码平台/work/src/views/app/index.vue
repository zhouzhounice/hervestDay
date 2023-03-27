<template>
    <div>
      app-index
<!--      <router-view></router-view>-->
    </div>
</template>

<script setup="props, { emit }">
import {getCurrentInstance, watchEffect} from 'vue'

const  ctx  = getCurrentInstance();
console.log('crt===',ctx)



watchEffect(() => {
  // eslint-disable-next-line no-undef
  console.log(props)
})
// eslint-disable-next-line no-undef
emit('foo')
</script>
