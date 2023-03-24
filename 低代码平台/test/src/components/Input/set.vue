<template>
  设置value
  <el-input v-model="valueData"></el-input>
  设置placeholder
  <el-input v-model="valueData2"></el-input>
  <el-button @click="() => set()">确认</el-button>
</template>
<script setup>
import { ref } from "vue";
import { useLowCodeStore } from "../../store/index";
const store = useLowCodeStore();
const valueData = ref("");
const valueData2 = ref("");
const set = (str) => {
  const value = store.nowComponent;
  value.props.value = valueData.value;
  value.props.placeholder = valueData2.value;
  store.updateNowComponents(value);
};
</script>

