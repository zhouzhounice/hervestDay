<template>

  <el-card class="box-card" style="margin-top: 15px;" :body-style="{padding:'10px 10px'}">
    <template #header>
      <div class="f-header">
        <span><el-icon size="30" style="top: 8px"><Paopao /></el-icon>{{ title }}</span>
        <el-button class="button" text>更多</el-button>
      </div>
    </template>
    <div class="f-cards">
      <div class="f-card app-item" v-for="item in AppList" :key="item.id" :style="itemStyle">
        <router-link :to="`/APP_${item.app_id}`" >
          <img src="../../../assets/img/xiangji.png" class="image"/>
          <p :style="itemStyle">{{item.app_name}}</p>
        </router-link>
      </div>
    </div>
  </el-card>

</template>

<script setup>
import {ref} from "vue";
import {watch} from "@vue/runtime-core";
import { Paopao } from '@/assets/icons'

const props = defineProps({
  list: {
    type: Object,
    default: null,
  },
  num: {
    type: Number,
    default: 15,
  },
  title: {
    type: String,
    default: '',
  },
  itemStyle: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
       width: '80px'
    },
  },
})

const AppList = ref(props.list)
//监听外部传递进来的的数据变化
watch(
    () => props.list,
    () => {
      AppList.value = props.list
      //emits("getContent", myValue.value)
    }
)



</script>

<style lang="less">
 .app-item {

 }
</style>
