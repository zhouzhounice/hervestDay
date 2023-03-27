<template>
  <el-card class="box-card richen" :body-style="{padding:'0px'}" style="margin-top: 15px;">
    <template #header>
      <div style="min-height: 150px;position:relative;">
        <div>
          <span><el-icon size="30" style="top: 8px"><Location /></el-icon>甘肃 张掖市</span>
          <el-button class="button" text>3月25日 星期五</el-button>
          <p style="font-size: 45px;margin-left: 20px">28℃</p>
        </div>
        <el-icon size="60" style="position: absolute;top: 10px;right: 10px"><Wether /></el-icon>
      </div>
    </template>
    <div class="f-richen" style="margin-top: -50px;">
      <el-row class="row-bg header" justify="space-between" style="height: 40px;line-height: 40px;padding: 0 10px;">
        <el-col :span="6">
          <el-icon style="top: 3px"><ArrowLeftBold /></el-icon>
        </el-col>
        <el-col :span="6" style="text-align: center">
          2023年3月
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-icon  style="top: 3px"><ArrowRightBold /></el-icon>
        </el-col>
      </el-row>
      <div class="content" style="display:flex;background: #F1F2F3;padding: 10px 2px">
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
        <div>日</div>
      </div>
      <div class="content" style="display:flex;background: #F1F2F3;padding: 10px 2px">
        <div><el-button circle > 23</el-button></div>
        <div><el-button circle > 24</el-button></div>
        <div>
          <el-button  circle > 25</el-button>
          <p style="font-size: 12px;color: #409eff">润二月</p>
        </div>
        <div><el-badge :value="3" class="item"><el-button type="primary" circle > 26</el-button></el-badge></div>
        <div><el-button  circle > 27</el-button></div>
        <div><el-badge is-dot class="item"><el-button  circle > 28</el-button></el-badge></div>
        <div><el-button circle > 29</el-button></div>
      </div>
      <div style="padding: 30px 20px 5px 20px">
        <el-timeline>
          <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :hollow="activity.hollow"
              :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>

    </div>


  </el-card>
</template>

<script setup>
import { Wether } from '@/assets/icons'
import {MoreFilled} from "@element-plus/icons-vue";

const activities = [
  {
    content: '2023年3月1日',
    timestamp: '开发中',
    size: 'large',
    type: 'success',
    icon: MoreFilled,
  },
  {
    content: '2023年3月20日',
    timestamp: 'dev1.0版本上线, 进度延迟,未按时完成任务',
    type: 'primary',
    hollow: true,
    color: '#0bbd87',
    size: 'large',
  },
  {
    content: '2023年2月8日',
    timestamp: '项目启动',
  },
]
</script>

<style >
.richen {
  background-image: url(../../../assets/img/tianqi4.jpg);
  background-size: 100% 150px;
  background-repeat: no-repeat;
}

</style>
