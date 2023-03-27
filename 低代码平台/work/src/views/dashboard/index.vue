<template>
  <el-container style="margin: 0 auto;box-shadow: rgb(0 0 0 / 30%) 1px 5px 10px;overflow-y: hidden">
    <el-header class="" style="border-bottom: 1px solid rgb(228, 231, 237);;text-align: left;padding: 0 15px;height: 60px;line-height: 60px">
      <el-row  class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-icon size="30" color="red" style="top: 10px"><Wechat /></el-icon>
          AppName
        </el-col>
        <el-col :span="12" style="text-align: center">

          <el-menu style="display: block;height:59px"
                   :default-active="defaultActive"
                   class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect"
          >
            <el-menu-item index="" route="">首页</el-menu-item>
            <el-menu-item index="/apps" route="/apps">应用</el-menu-item>
            <el-menu-item index="3">消息</el-menu-item>
            <el-menu-item index="4">通讯录</el-menu-item>
            <el-menu-item index="5">日程</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-button circle :icon="ChatDotRound" style="margin: 0 10px" />
          <el-dropdown class="user panel-item" trigger="click" @command="handleClickUser" style="height: 60px;line-height: 60px;">
            <div class="user-avatar">
              <el-avatar :size="30" style="top: 10px;position: relative">{{ userInfo.avatar }}</el-avatar>
              <label>{{ userInfo.user_name }}</label>
              <el-icon class="el-icon--right"><ArrowDown /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="uc">帐号信息</el-dropdown-item>
                <el-dropdown-item command="clearCache">清除缓存</el-dropdown-item>
                <el-dropdown-item divided command="Logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>

    </el-header>

    <div>
      <router-view></router-view>
    </div>

  </el-container>

</template>

<script setup>
import { Wechat } from '@/assets/icons'
import { ChatDotRound} from '@element-plus/icons-vue'
import tool from "@/utils/tool";
import {useRouter} from "vue-router/dist/vue-router";
import {getCurrentInstance, ref} from "vue";

const defaultActive = ref('')

const crt = getCurrentInstance()?.appContext.config.globalProperties;
const $router = useRouter();

if($router.currentRoute.value.path.indexOf('apps') !== -1) {
  defaultActive.value = '/apps';
}

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
  $router.push({
    path: `/dashboard${key}`
  });
}
const handleClickUser = (command) => {
  console.log(command)
  if (command === 'Logout') {
    crt.$confirm('确认是否退出当前用户？','提示', {
      type: 'warning',
      confirmButtonText: '退出',
      confirmButtonClass: 'el-button--danger'
    }).then(async () => {
      tool.cookie.remove("TOKEN")
      tool.data.remove("USER_INFO")
      await crt.$http.common.logout.post()
      crt.$router.replace({path: '/public/login'});
    }).catch(() => {
      //取消退出
    })
  }
}


const userInfo = tool.data.get("USER_INFO");
</script>

<style lang="less">
@import './dashboard'; // 导入相关样式;
:root {
  --vp-screen-max-width: 1362px;
}
@media screen and (min-width: 1440px) {
  .el-container{
    max-width:calc(var(--vp-screen-max-width))
  }
}
.el-calendar-table .el-calendar-day {height: 35px}
</style>
