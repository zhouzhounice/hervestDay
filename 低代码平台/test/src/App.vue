
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header border">Header</el-header>
      <el-container>
        <el-aside width="200px" class="border">
          <VueDraggableNext v-model="store.component" :sort="false" :group="{
            name: 'components', //组名为icomponents
            pull: 'clone', //是否允许拖出当前组
            put: false, //是否允许拖入当前组
          }" @end="onEnd">
            <div  v-for="item in store.component" :key="item.id" class="tem_btn">
              {{ item.name }}
            </div>
          </VueDraggableNext>
        </el-aside>
        <el-main class="border">
          <VueDraggableNext :v-model="store.preview" :group="{
            name: 'template',
            pull: false,
            put: true,
          }" ghost-class="ghost" class="canvas">
            <template v-for="item in store.preview" :key="item.id">
              <component :is="componentsList[item?.code]" :data="item"></component>
            </template>
          </VueDraggableNext>
        </el-main>
        <el-aside width="200px" class="border">Aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { shallowRef, ref, onBeforeMount, watch } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import { useLowCodeStore } from "./store/index";
import Button from "./components/Button/index.vue";
import Input from "./components/Input/index.vue";
import ButtonSet from "./components/Button/set.vue";
import InputSet from "./components/Input/set.vue";

const store = useLowCodeStore();
watch(store, (n, l) => {
  console.log("数据", n);
});
const componentsList = {
  button: Button,
  input: Input,
  "button-set": ButtonSet,
  "input-set": InputSet,
};
const onEnd = (obj) => {
  console.log(obj)
  const { oldDraggableIndex } = obj;
  console.log(store)
  store.previewData(store.component[oldDraggableIndex]);
  store.nowComponentsData(store.component[oldDraggableIndex]);
};

</script>


<style scoped lang="scss">
body {
  margin: 0;
  padding: 0;
}

.common-layout {
  width: 100%;
  padding: 0 120px;
}

.header {
  background-color: cornflowerblue;
  font-weight: 700;
  font-size: 20px;
  text-align: center;

}

.main {
  background-color: #e97cc5;
}

.border {
  border: 1px #181818 solid;
  border-radius: 5px;
}

.low_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;

  .header {
    height: 65px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .tem_btn {
    cursor: pointer;
    padding: 0px 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #666;
    background-color: #f2f2f2;
    border-radius: 4px;
    cursor: move;
    user-select: none;
    margin-top: 20px;
    float: left;
    margin-left: 20px;
  }

}
</style>
