<script setup>
import {useMouse} from '../utils/useMouse';
let {x,y} = useMouse()
</script>

<template>
    <div>
      <h1>当前横坐标的值为{{ x }}</h1>
      <h1>当前纵坐标的值为{{ y }}</h1>
    </div>
</template>

<style lang='less' scoped>

</style>