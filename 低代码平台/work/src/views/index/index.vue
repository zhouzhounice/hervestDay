<template>
  <div class="hello">
    <h1>{{ msg||"Helloword2" }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>

    <h3>=========================</h3>
    <div style="color: aqua">父组件</div>
    <div>子组件对我说：{{ children_msg }}</div>
    <child-item :title="msg" @listen="listenToChildren"></child-item>


    <h3>Ecosystem</h3>
  </div>
</template>

<script>
// import BxCodeEditor from "@/components/BxCodeEditor";
import ChildItem from "./ChildItem";
import { defineComponent,ref } from "vue"

export default defineComponent({
  name: 'Index',
  components:{
    ChildItem
  },

  setup() {
    let msg = 'hellow'
    let children_msg = ref("") //
    let listenToChildren = (val) => {
      children_msg.value = val // 使用ref包裹的数据，需要通过.value的形式访问他的值
    }

    return {
      msg,
      children_msg,
      listenToChildren
    }
  }

})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  /*margin-: 40px 0 0;*/
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
