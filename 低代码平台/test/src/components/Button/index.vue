<template>
  <el-button :type = "props.data.props.type">
    {{props.data.props.value}}
  </el-button>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  data: Object
})

</script>

<style scoped>

</style>
