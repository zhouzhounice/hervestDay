<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="deepColor" height="100px">
        <el-row :gutter="20" class="center">
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple button-conter">
            <el-button type="primary" size="small" class="button" @click="login">登录</el-button>
          </div></el-col>
      </el-row>
      </el-header>
      <el-main class="lightColor">Main</el-main>
      <el-footer class="deepColor">Footer</el-footer>
    </el-container>
  </div>
</template>


<script setup>
import { useRouter } from "vue-router";
const router = useRouter()

  const login = ()=>{
    console.log('login')
    router.push('/login')
  }
</script>

<style scoped>
.deepColor{
  background-color: #c6e2ff;
}
.lightColor{
  background-color: #ecf5ff;
}
.center {
  padding-top: 30px;
}
.common-layout {
  width: 100%;
  height: 100%;
  padding: 0 50px;
}

.container{
  width: 100%;
  height: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #d3dce6;
}
.button-conter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.button{
  width: 50px;
}
</style>