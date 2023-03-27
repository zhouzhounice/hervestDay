<template>
  <el-container>
      <el-aside width="300px" class="page_left" style=";height: calc(100vh - 60px);padding: 10px 5px">

        <DaibanList />
        <AppList :list="appList.slice(0,6)" title="快捷方式" :item-style="{ width:'55px' }"/>
        <LinksList :list="appList" title="快捷方式" :item-style="{ width:'55px' }"/>

      </el-aside>

      <el-main class="page_main" style="padding-top: 10px">

        <div class="card-box f-boxs" style="width: 100%;display: block">
          <el-row :gutter="12">
            <el-col :span="6">
              <el-card class="box-card box1" shadow="always">
                <div class="box-icon"><img src="../../assets/img/shenpi.png" alt="" ></div>
                待我处理
                <el-progress :percentage=100 status="success" />
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card box2" shadow="hover">
                <div class="box-icon"><img src="../../assets/img/yonghu.png" alt="" ></div>
                我发起的
                <el-progress :percentage=100 status="warning" />
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card box3" shadow="never">
                <div class="box-icon"><img src="../../assets/img/liucheng.png" alt="" ></div>
                抄送给我
                <el-progress :percentage=100 :indeterminate="true" />
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card box4" shadow="never">
                <div class="box-icon"><img src="../../assets/img/yonghu2.png" alt="" ></div>
                我已处理
                <el-progress :percentage=100 />
              </el-card>
            </el-col>

          </el-row>
        </div>


        <el-row class="row-bg" :gutter="12" justify="space-between">
          <el-col :span="15">
            <AppList :list="appList.slice(0,12)" title="我的应用" :item-style="{ width:'75px' }"/>
            <NewsList :list="myNewsList.slice(0,6)"/>
          </el-col>
          <el-col :span="9">
            <MyRichen></MyRichen>
            <MyGongsi></MyGongsi>
          </el-col>
        </el-row>

        <el-row class="row-bg" :gutter="12" justify="space-between">
          <el-col :span="18">
            <MyRichen2></MyRichen2>
          </el-col>

        </el-row>

      </el-main>

  </el-container>

</template>

<script setup>
import {getCurrentInstance, reactive, ref } from "vue";
import {onBeforeMount} from "@vue/runtime-core";
import {useRouter} from "vue-router/dist/vue-router";

import DaibanList from "./components/DaibanList";
import AppList from "./components/AppList";
import MyRichen from "./components/MyRichen";
import MyRichen2 from "./components/MyRichen2";
import NewsList from "./components/NewsList";
import LinksList from "./components/LinksList";
import MyGongsi from "./components/MyGongsi";
import tool from "@/utils/tool";



const appList = ref([])
const myNewsList = ref([])


const crt = getCurrentInstance()?.appContext.config.globalProperties;


onBeforeMount(()=>{
  console.log('onBeforeMount',)
  const $router = useRouter();
  console.log('$router:', $router.currentRoute.value.params);
  console.log('$router:', $router.currentRoute.value.params.appId);
  let token = tool.cookie.get("TOKEN");
  console.log('token:', token);
  getAppList()
  getNewsList()
})





async function getAppList() {
  const tmpData =reactive({
    app_id: ''
  })
  const user = await crt.$http.apps.getList.post(tmpData)
  if (user.code === 200) {
    //crt.$message.success(user.msg)
    appList.value = user.data.rows
  } else {
    crt.$message.error(user.msg)
    return false
  }
}

async function getNewsList() {
  const user = await crt.$http.news.getList.post()
  if (user.code === 200) {
    myNewsList.value = user.data.rows
  } else {
    crt.$message.error(user.msg)
    return false
  }
}


</script>

