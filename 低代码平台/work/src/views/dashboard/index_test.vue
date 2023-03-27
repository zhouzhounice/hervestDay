<template>
  <el-container style="margin: 0 auto;box-shadow: rgb(0 0 0 / 30%) 1px 5px 10px;">
    <el-header class="padding0" style="border-bottom: 1px solid rgb(228, 231, 237);;text-align: left;">
      <el-row :id="titleId" class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-icon size="30" color="red" style="top: 10px"><Wechat /></el-icon>
          AppName
        </el-col>
        <el-col :span="12" style="text-align: center">

          <el-menu style="border: 0"
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">应用</el-menu-item>
            <el-menu-item index="3">消息</el-menu-item>
            <el-menu-item index="4">通讯录</el-menu-item>
            <el-menu-item index="5">日程</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-dropdown class="user panel-item" trigger="click" @command="handleUser" style="height: 60px;line-height: 60px;">
            <div class="user-avatar">
              <el-avatar :size="30">{{ userNameF }}</el-avatar>
              <label>admin</label>
              <el-icon class="el-icon--right"><ArrowDown /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="uc">帐号信息</el-dropdown-item>
                <el-dropdown-item command="clearCache">清除缓存</el-dropdown-item>
                <el-dropdown-item divided command="outLogin">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>

    </el-header>

    <el-container>
      <el-aside width="250px" class="page_left" style="box-shadow: 5px 5px 10px rgb(0 0 0 / 30%);height: calc(100vh - 50px);padding: 10px 5px">


      </el-aside>

      <el-main class="page_main" style="padding-top: 10px">
        <div class="card-box" style="width: 100%;display: block">
          <el-row :gutter="12">
            <el-col :span="6">
              <el-card class="box-card box1" shadow="always">
                Always
                <el-progress :percentage="100" status="success" />

              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card box2" shadow="hover">
                Hover
                <el-progress :percentage="100" status="warning" />
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card box3" shadow="never">
                Never
                <el-progress :percentage="100" :format="format" :indeterminate="true" />
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card box4" shadow="never">
                Never
                <el-progress :percentage="percentage" :color="customColor" />

              </el-card>
            </el-col>

          </el-row>
        </div>

        <h1>================</h1>


        <el-row class="row-bg" :gutter="12" justify="space-between">
          <el-col :span="12">
            <el-card class="box-card" :body-style="{padding:'10px 10px'}">
                <template #header>
                  <div class="card-header" style="display: flex;justify-content: space-between;align-items: center;">
                    <span>我的应用</span>
                    <el-button class="button" text>更多</el-button>
                  </div>
                </template>
                <div class="f-cards">
                  <div class="f-card" v-for="i in [1,2,3,4,5,6]" :key="i">
                    <img src="../../assets/img/xiangji.png" class="image"/>
                    <p>{{i}}应用名称</p>
                  </div>
                </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" :body-style="{padding:'0px'}">
                <template #header>
                  <div class="card-header" style="display: flex;justify-content: space-between;align-items: center;">
                    <span>我的日程</span>
                  </div>
                </template>
              <div class="f-richen">
                <el-row class="row-bg header" justify="space-between" style="height: 40px;line-height: 40px;padding: 0 10px;border-bottom: 1px solid #ccc">
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
                <div class="content" style="display:flex;margin: 10px 0 ">
                  <div>一</div>
                  <div>二</div>
                  <div>三</div>
                  <div>四</div>
                  <div>五</div>
                  <div>六</div>
                  <div>日</div>
                </div>
                <div class="content" style="display:flex;margin: 10px 0 20px 0">
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                </div>
                <div style="padding: 10px 20px">
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
          </el-col>

          <el-col :span="12">
            <el-card class="box-card gongsi">
              <div style="display:flex;">
                <img src="../../assets/logo.png" alt="" style="width: 60px;border-radius: 50%">
                <div style="line-height: 30px;">
                   <h2>甘肃百信智能科技</h2>
                   <p>账号未激活,前往激活</p>
                </div>
              </div>
              <el-descriptions :column=1  min-width="100">
                <el-descriptions-item label-align="right" label="所属组织">kooriookami</el-descriptions-item>
                <el-descriptions-item label-align="right" min-width="100" label="CorpId">18100000000</el-descriptions-item>
                <el-descriptions-item label-align="right" label="ApiToken">ApiToken</el-descriptions-item>
              </el-descriptions>
            </el-card>
          </el-col>

          <el-col :span="12">
            <el-card class="box-card dashiji">
              <template #header>
                <img src="../../assets/img/dashiji.png" alt="" style="width: 100%;">
              </template>
              <div class="header" style=" display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #ccc;
              padding: 0 15px;padding-bottom: 5px;margin-bottom: 10px">
                <h3 class="custom-block tip" style="margin: 0;padding: 2px 15px">公司大事记</h3>
                <div>查看更多</div>
              </div>


              <div v-for="item in news" :key="item.id" class="text item" style=" display: flex;justify-content: space-between;align-items: center;padding: 5px 15px">
                <div class="title">
                  <el-tag class="ml-2" :type="item.type" effect="dark">{{ item.tag }}</el-tag>
                  {{ item.title }}
                </div>
                <span>{{ item.date }}</span>
              </div>

            </el-card>
          </el-col>


          <el-col :span="6">
            <el-card class="box-card">
              <div class="statistic-card">
                <el-statistic :value="98500">
                  <template #title>
                    <div style="display: inline-flex; align-items: center">
                      Daily active users
                      <el-tooltip
                          effect="dark"
                          content="Number of users who logged into the product in one day"
                          placement="top"
                      >
                        <el-icon style="margin-left: 4px" :size="12">
                          <Warning />
                        </el-icon>
                      </el-tooltip>
                    </div>
                  </template>
                </el-statistic>
                <div class="statistic-footer">
                  <div class="footer-item">
                    <span>than yesterday</span>
                    <span class="green">
              24%
              <el-icon>
                <CaretTop />
              </el-icon>
            </span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-steps :space="200" :active="1" simple>
              <el-step title="Step 1" :icon="Edit" />
              <el-step title="Step 2" :icon="UploadFilled" />
              <el-step title="Step 3" :icon="Picture" />
            </el-steps>
            <el-steps :active="2" align-center>
              <el-step title="Step 1" description="Some description" />
              <el-step title="Step 2" description="Some description" />
              <el-step title="Step 3" description="Some description" />
              <el-step title="Step 4" description="Some description" />
            </el-steps>

          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="statistic-card">
                <el-statistic :value="693700">
                  <template #title>
                    <div style="display: inline-flex; align-items: center">
                      Monthly Active Users
                      <el-tooltip
                          effect="dark"
                          content="Number of users who logged into the product in one month"
                          placement="top"
                      >
                        <el-icon style="margin-left: 4px" :size="12">
                          <Warning />
                        </el-icon>
                      </el-tooltip>
                    </div>
                  </template>
                </el-statistic>
                <div class="statistic-footer">
                  <div class="footer-item">
                    <span>month on month</span>
                    <span class="red">
              12%
              <el-icon>
                <CaretBottom />
              </el-icon>
            </span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-progress type="dashboard" :percentage="80">
              <template #default="{ percentage }">
                <span class="percentage-value">{{ percentage }}%</span>
                <span class="percentage-label">Progressing</span>
              </template>
            </el-progress>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <template #header>
                <div class="card-header" style="display: flex;justify-content: space-between;align-items: center;">
                  <span>我的应用</span>
                  <el-button class="button" text>更多</el-button>
                </div>
              </template>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
          </el-col>


        </el-row>


      </el-main>

    </el-container>

  </el-container>
<!--  <div class="page-wrapper" style="border: 1px solid red">-->
<!--    Dashboard-->
<!--  </div>-->
</template>

<script setup>
import {ref} from "vue";

const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]

const news = [
  {
    id: 1,
    title: '关于清明节放假的通知',
    tag:'通知公告',
    type:'success',
    date:'2023-02-03'
  },{
    id: 2,
    title: '征集团建活动方案',
    tag:'团建活动',
    type:'info',
    date:'2023-02-03'
  },{
    id: 3,
    title: '数字化转型能够助力中小企业提质增效、降本减存，',
    tag:'新闻资讯',
    type:'',
    date:'2023-02-03'
  },{
    id: 4,
    title: '数字化水平关系到中小企业的高质量发展。',
    tag:'新闻资讯',
    type:'',
    date:'2023-02-03'
  },{
    id: 5,
    title: '数字化水平关系到中小企业的高质量发展。',
    tag:'公司大事记',
    type:'danger',
    date:'2023-02-03'
  },
]
const userNameF = ref('A')
</script>

<style lang="less">
@import './dashboard'; // 导入相关样式;

</style>
<style>

:root {
  /*--vp-screen-max-width: 1376px;*/
  --vp-screen-max-width: 1362px;
  margin: 0 auto;
}
/*@media screen and (min-width: 1680px) {*/
/*  :root {*/
/*    --vp-screen-max-width: 1482px;*/
/*    --vp-sidebar-width-small: 290px*/
/*  }*/
/*}*/
.el-row {margin-left: 0;margin-right: 0;}
@media screen and (min-width: 1280px) {
  .navbar-wrapper {
    padding:0 32px
  }
}

.navbar-wrapper .header-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto
}

.navbar-wrapper .header-container .content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1
}

@media screen and (min-width: 1440px) {
  .el-container{
    max-width:calc(var(--vp-screen-max-width))
  }
}

@media screen and (min-width: 1680px) {
  .el-container {
    max-width:calc(var(--vp-screen-max-width))
  }
}

.el-container {

}
.el-card__header{padding: 10px 20px}
.card-box {display: flex;width: 100%}
.card-box .el-card {
  position: relative;
}
.card-box .el-space__item {width: 24.25%}
.box1 {
  background: #4f517f;
  background: -moz-linear-gradient(45deg,rgba(79,81,127,1) 0,rgba(50,53,132,1) 44%,rgba(50,53,132,1) 100%);
  background: -webkit-linear-gradient(45deg,rgba(79,81,127,1) 0,rgba(50,53,132,1) 44%,rgba(50,53,132,1) 100%);
  background: linear-gradient(45deg,rgba(79,81,127,1) 0,rgba(50,53,132,1) 44%,rgba(50,53,132,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4f517f',endColorstr='#323584',GradientType=1);
}

/*background: linear-gradient(to right,#ea7a9a 0,#fac7b6 100%);*/

.box2 {
  background: #c085f8;
  background: -moz-linear-gradient(45deg,rgba(192,133,248,1) 0,rgba(192,133,248,1) 44%,rgba(160,89,242,1) 100%);
  background: -webkit-linear-gradient(45deg,rgba(192,133,248,1) 0,rgba(192,133,248,1) 44%,rgba(160,89,242,1) 100%);
  background: linear-gradient(45deg,rgba(192,133,248,1) 0,rgba(192,133,248,1) 44%,rgba(160,89,242,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#c085f8',endColorstr='#a059f2',GradientType=1);
}
.box3 {
  background: #fdb583;
  background: -moz-linear-gradient(45deg,rgba(253,181,131,1) 0,rgba(253,181,131,1) 26%,rgba(252,141,148,1) 100%);
  background: -webkit-linear-gradient(45deg,rgba(253,181,131,1) 0,rgba(253,181,131,1) 26%,rgba(252,141,148,1) 100%);
  background: linear-gradient(45deg,rgba(253,181,131,1) 0,rgba(253,181,131,1) 26%,rgba(252,141,148,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fdb583',endColorstr='#fc8d94',GradientType=1);
}
.box4 {
  background: #f35ccc;
  background: -moz-linear-gradient(45deg,#00 0,#00 26%,#00 100%);
  background: -webkit-linear-gradient(45deg,#00 0,#00 26%,#00 100%);
  background: linear-gradient(45deg,#00 0,#00 26%,#00 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#74d5cb',endColorstr='#27c1ad',GradientType=1);
}
.card-box .el-card:before {
  content: "";
  position: absolute;
  right: -40px;
  top: 10px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: rgba(245,245,245,0.3);
}
.card-box .el-card:after {
  content: "";
  position: absolute;
  right: -20px;
  bottom: -10px;
  width: 110px;
  height: 110px;
  border-radius: 100px;
  background-color: rgba(245,245,245,0.3);
}


</style>
