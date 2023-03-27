<template>
  <el-card class="box-card" :body-style="{padding:'0px 15px 15px'}" style="margin-top: 15px">
    <template #header>
      <div class="f-header">
        <div><el-icon size="30" style="top: 8px"><Link /></el-icon>常用链接</div>
        <div></div>
      </div>
    </template>
    <div class="links">
      <el-tabs model-value="first" class="demo-tabs" >
        <el-tab-pane label="外部链接" name="first">
          <div v-for="item in links" :key="item.id" class="text item" style=" display: flex;justify-content: space-between;align-items: center;padding: 5px 15px">
            <div class="title">
              <el-icon size="30" style="top: 0px"><Taobao /></el-icon>
            </div>
            <a>{{ item.title }}</a>
            <span style="width:calc(100% - 80px);text-align: right">
              <el-icon><ArrowRight /></el-icon>
            </span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="内部链接" name="second">内部链接</el-tab-pane>
      </el-tabs>
    </div>

  </el-card>
</template>

<script setup>
import { Taobao,Paizhao } from '@/assets/icons'


const links = [
  {
    id: 1,
    title: '淘宝',
    tag:'通知公告',
    type:'Taobao',
    date:'2023-02-03'
  },{
    id: 2,
    title: '百度',
    tag:'团建活动',
    type:'Taobao',
    date:'2023-02-03'
  },{
    id: 3,
    title: '钉钉',
    tag:'新闻资讯',
    type:'Paizhao',
    date:'2023-02-03'
  },{
    id: 4,
    title: '京东',
    tag:'新闻资讯',
    type:'Paizhao',
    date:'2023-02-03'
  },{
    id: 5,
    title: '阿里云',
    tag:'公司大事记',
    type:'Paizhao',
    date:'2023-02-03'
  },
]

console.log(Paizhao)

</script>

<style scoped>

</style>
