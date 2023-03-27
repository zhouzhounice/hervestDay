<template>
  <div>
    <div style="color: brown">子组件</div>
    <!-- 父传子使用方法和vue2相同 -->
    <div>父组件传过来的值为：{{ title }}</div>
    <button @click="sayToFather">向父组件说话</button>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ChildItem',
  props:{
    title:{
        type: String
    }
  },
  //setup(props,content) {
  setup(props, context) {
      //console.log(props,content)
    const sayToFather = () => {
      const ask = "我是子组件，我对父组件说话"
      context.emit("listen", ask)
    }
    return {
      sayToFather,
    }
  }
})

</script>

<style scoped>

</style>
