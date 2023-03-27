<template>
  <el-card class="box-card" :body-style="{padding:'0px'}">
    <template #header>
      <div class="f-header">
        <div><img src="../../../assets/img/daiban.png" alt="" style="width: 30px;position: relative;top: 6px">待办工作</div>
        <div></div>
      </div>
    </template>
    <div class="links" style="padding-right: 10px;">
      <div v-for="item in DaibanList" :key="item.id" class="text item"
           style=" display: flex;;align-items: center;padding: 10px 5px 0 5px;">
        <div class="title" style="width: 50px;">
          <img :src="item.img" alt="" style="width: 100%">
        </div>
        <div style="width: calc(100% - 80px);">
          <a>{{ item.title }}</a>
          <p style="font-size: 13px;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;">{{item.desc}}</p>
        </div>

        <span style="width:30px;text-align: right">
          <el-badge :value="item.badge" class="item">

          </el-badge>
        </span>
      </div>
    </div>

  </el-card>
</template>

<script setup>

import {ref} from "vue";
import {watch} from "@vue/runtime-core";

//:src="require('@/assets/images/home/home_icon.png')" />
const props = defineProps({
  list: {
    type: Object,
    default: () => {
      return [
        {id: 1,img:require('@/assets/img/jiaoyi.png'), title: '代收文', desc: '方佳宇向您发送了2个文件', badge: 1},
        {id: 2,img:require('@/assets/img/liucheng.png'), title: '请假审批', desc: '方佳宇提交的请假申请,待您审批', badge: 2},
        {id: 3,img:require('@/assets/img/zichan.png'), title: '费用报销', desc: '方佳宇提交的费用报销,待您审批', badge: 3},
        {id: 4,img:require('@/assets/img/che.png'), title: '车辆维修', desc: '方佳宇提交的车辆维修,抄送给您', badge: 1},
      ]
    }
  }
})

const DaibanList = ref(props.list)
watch(
    () => props.list,
    () => {
      DaibanList.value = props.list
    }
)

</script>

<style scoped>

</style>
