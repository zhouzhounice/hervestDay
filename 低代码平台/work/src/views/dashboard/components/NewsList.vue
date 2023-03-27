<template>
  <el-card style="margin-top: 15px;" class="box-card dashiji">
    <template #header>
      <img src="../../../assets/img/dashiji.png" alt="" style="width: 100%;height: 120px">
    </template>
    <div class="f-header" style=" ;border-bottom: 1px solid #ccc;
              padding: 0 15px;padding-bottom: 5px;margin-bottom: 10px;height: 30px;line-height: 30px">
<!--      <h3 class="custom-block tip" style="margin: 0;padding: 2px 15px">公司大事记</h3>-->


      <img src="../../../assets/img/gonggao.png" alt="" style="width: 35px;margin-right: 5px">
      <el-carousel class="lunbo" height="35" direction="vertical" style="width: 100%;height: 40px;line-height: 40px;">
        <el-carousel-item v-for="(item, index) in currentTabList" :key="index">
          <a target="_blank">{{  item.title }}</a>
        </el-carousel-item>
      </el-carousel>
      <el-link :underline="false" style="width: 50px">更多</el-link>
    </div>

    <div v-for="item in AppList" :key="item.id" class="text item" style=" display: flex;justify-content: space-between;align-items: center;padding: 5px 15px">
      <div class="title">
        <el-tag class="ml-2" :type="item.type" effect="dark">{{ item.tag }}</el-tag>
        {{ item.title }}
      </div>
      <span>{{ item.date }}</span>
    </div>

  </el-card>
</template>

<script setup>
//监听外部传递进来的的数据变化
import {watch} from "@vue/runtime-core";

import {ref} from "vue";
const props = defineProps({
  list: {
    type: Object,
    default: null,
  }
})
const AppList = ref(props.list)
const currentTabList = ref([
  {id:1, title: '关于清明节放假的通知'},
  {id:2, title: '关于征集团建活动方案的通知'},
  {id:3, title: '关于征集团建活动方案的通知2'},
])

watch(
    () => props.list,
    () => {
      AppList.value = props.list
      //emits("getContent", myValue.value)
    }
)


</script>

<style scoped>

</style>
