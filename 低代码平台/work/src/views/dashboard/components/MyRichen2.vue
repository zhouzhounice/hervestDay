<template>
  <el-card class="box-card" :body-style="{padding:'0px'}" style="margin-top: 15px;">
    <template #header>
      <div class="f-header">
        <span><el-icon size="30" style="top: 8px"><Calendar /></el-icon>日程管理</span>
        <el-button class="button" text>更多</el-button>
      </div>
    </template>
    <el-row :gutter="12">
      <el-col :span="15">
        <el-calendar ref="calendar" style="padding: 0px" :body-style="{padding:'15px'}">
          <template #header="{ date }">
                      <span>
                        <el-button size="small" @click="selectDate('prev-month')" circle >
                          <el-icon><ArrowLeftBold /></el-icon>
                        </el-button>
                      </span>
            <span>{{ date }}</span>
            <el-button-group>

              <el-button size="small" @click="selectDate('next-month')" circle >
                <el-icon><ArrowRightBold /></el-icon>
              </el-button>
            </el-button-group>
          </template>
        </el-calendar>
      </el-col>
      <el-col :span="9">
        <el-timeline style="margin-top: 25px">
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
      </el-col>

    </el-row>

  </el-card>
</template>

<script setup>
import {MoreFilled} from "@element-plus/icons-vue";

const activities = [
  {
    content: '2023年4月1日',
    timestamp: '开发中',
    size: 'large',
    type: 'success',
    icon: MoreFilled,
  },
  {
    content: '2023年3月1日',
    timestamp: 'dev2.0版本上线,未按时完成',
    size: 'large',
    type: 'info',
    icon: MoreFilled,
  },
  {
    content: '2023年3月20日',
    timestamp: 'dev1.0版本上线,未按时完成',
    type: 'primary',
    hollow: true,
    color: '#0bbd87',
    size: 'large',
  },
  {
    content: '2023年3月1日',
    timestamp: '项目梳理完成',
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

</style>
