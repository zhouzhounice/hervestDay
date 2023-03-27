<template>
  <div class="app_content">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="页面预览" name="page">
        页面预览
      </el-tab-pane>
      <el-tab-pane label="流程" name="second">
        流程
      </el-tab-pane>
      <el-tab-pane label="数据管理" name="third">
        数据管理
      </el-tab-pane>
      <el-tab-pane label="集成自动化" name="five">
        集成自动化
      </el-tab-pane>
      <el-tab-pane label="设置" name="fourth">
        设置
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import {onMounted} from "@vue/runtime-core";
const activeName = ref('page')

function getAppInfo() {
  const url = 'http://bxapi.bxweb.cn/v1/public/get-page-list'
  axios
      .post(url)
      .then( res => {
          console.log(res)
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
}

onMounted(() => {
  getAppInfo()
})


</script>

<style scoped>

</style>
