import { Mode } from 'use-switch-tabs';
<template>
  <!-- <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside>
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/about">About</router-link>
        </div>
      </el-aside>
    </el-container>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container> -->
  <el-container>
  <el-header>
    <el-menu
      :default-active = '1'
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        处理中心
      </el-menu-item>
      <el-submenu index="2">
        <template v-slot:title>
          我的工作台
        </template>
        <el-menu-item index="2-1">
          菜单1
        </el-menu-item>
        <el-menu-item index="2-2">
          菜单2
        </el-menu-item>
        <el-menu-item index="2-3">
          菜单3
        </el-menu-item>
        <el-submenu index="2-4">
          <template v-solt:title>
            菜单4
          </template>
          <el-menu-item index="2-4-1">子菜单1</el-menu-item>
          <el-menu-item index="2-4-2">子菜单2</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/about">About</router-link>
        </div>
        <div>
          <router-link to="/echarts">Echarts</router-link>
        </div>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  <!-- <div id="app">
    <router-view />
  </div> -->
</template>


<script setup>

</script>



<style scoped>
  .el-header,  
  .el-footer {    
    background-color: #b3c0d1;    
    color: #333;    
    text-align: center;  
  }  
  .el-aside {    
    background-color: #d3dce6;    
    color: #333;  
  }  .el-main {    
    background-color: #e9eef3;    
    color: #333;  
  }  
  body > .el-container {    
    margin-bottom: 40px;  
  }
  
</style>
