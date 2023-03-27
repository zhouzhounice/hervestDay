<template>

  <div class="app-index">
    <el-container>

      <el-header class="padding0" style="border-bottom: 1px solid rgb(228, 231, 237);height: 50px;line-height: 50px;;text-align: left;">
         <el-icon size="30" color="red" style="top: 10px"><Wechat /></el-icon>
        AppName
      </el-header>

      <el-container>
        <el-aside width="250px" class="page_left" style="box-shadow: 1px 5px 10px rgb(0 0 0 / 30%);height: calc(100vh - 50px);padding: 10px 5px">
          <div class="" style="text-align: center">
            <el-input v-model="filterText" clearable  placeholder="请输入关键词" style="width: 70%;border-radius: 20px;margin-right: 10px;">
              <template #prefix> <el-icon ><Search /></el-icon></template>
            </el-input>
            <el-dropdown trigger="click">
            <el-button type="primary" circle>
              <el-icon><Plus /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu >
                <el-dropdown-item style="display: block" @click="dialogEditVisible=true">
                  <el-button link type="primary" ><el-icon size="18"><Document /></el-icon>创建普通表单</el-button>
                  <p style="display: block">收集数据, 收集数据, 收集数据, </p>
                </el-dropdown-item>
                <el-dropdown-item style="display: block">
                  <el-button link type="primary"><el-icon size="18"><Memo /></el-icon>创建流程表单</el-button>
                  <p style="display: block">流程审批, 业务审核, 数据协同, </p>
                </el-dropdown-item>
                <el-dropdown-item style="display: block">
                  <el-button link type="primary"><el-icon size="18"><Odometer /></el-icon>创建仪表盘</el-button>
                  <p style="display: block">数据展示, 数据分析, 数据概述, </p>
                </el-dropdown-item>
                <el-dropdown-item style="display: block">
                  <el-button link type="primary"><el-icon size="18"><PieChart /></el-icon>创建大屏</el-button>
                  <p style="display: block">数字化炫酷大屏, </p>
                </el-dropdown-item>

                <el-dropdown-item divided @click="dialogEditVisible=true">
                  <el-button link style="" ><el-icon size="18" color="#0089ff"><FolderAdd /></el-icon>创建分组</el-button>
                </el-dropdown-item>
                <el-dropdown-item divided><el-button link type="primary"><el-icon ><Search /></el-icon></el-button>
                  了解页面类型</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          </div>
<!--          <el-button type="primary" circle ><el-icon ><Plus /></el-icon></el-button>-->
          <!--                     :default-expanded-keys="[pageId]"-->

          <div class="node_tree" style="margin-top: 20px;">
            <el-tree ref="treeRef" draggable
                     :data="treeData"
                     node-key="page_id"
                     :default-expanded-keys="defaultSelectKey"
                     :render-content="renderContent"
                     :filter-node-method="filterNode"
                      />
          </div>

        </el-aside>

        <el-main class="page_main" style="padding: 10px 0 0 0">
          <el-breadcrumb style="padding:5px 0;padding-left: 15px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>应用管理</el-breadcrumb-item>
            <el-breadcrumb-item>页面列表1</el-breadcrumb-item>
            <el-breadcrumb-item>页面预览</el-breadcrumb-item>
          </el-breadcrumb>

          <el-row class="page_main_tool" type="flex" justify="space-between"  align="bottom" style="border-bottom:1px solid #E4E7ED;padding: 0 15px;box-shadow: rgb(0 0 0 / 30%) 1px 5px 5px;">
            <el-tabs v-model="tabsModel" class="demo-tabs" @tab-click="handleClick" style="height: 55px;line-height: 55px;">
              <el-tab-pane label="页面预览" name="preview" />
              <el-tab-pane label="流程" name="flow" />
              <el-tab-pane label="数据管理" name="data"/>
              <el-tab-pane label="集成自动化" name="event"/>
              <el-tab-pane label="设置" name="config" />
            </el-tabs>

            <div class="btn_groups" style="line-height: 55px;">
                <el-button type="primary" plain v-if="tabsModel==='preview'"  @click="openEditPage">
                  <el-icon class=""><VideoPlay /></el-icon>编辑表单页面
                </el-button>
                <el-button type="success" plain v-if="tabsModel==='preview'"  @click="openEditPage2">
                  <el-icon class=""><VideoPlay /></el-icon>访问页面
                </el-button>



                <el-button type="primary" plain v-if="tabsModel==='flow'"  @click="openEditPage">
                  <el-icon class=""><VideoPlay /></el-icon>编辑流程页面
                </el-button>

                <el-button type="primary" plain v-if="tabsModel==='data'"  @click="openEditPage">
                  <el-icon class=""><VideoPlay /></el-icon>查看数据页面
                </el-button>




              <el-button type="primary" link >
                <el-icon class=""><View /></el-icon>查看Conf
              </el-button>
            </div>
          </el-row>



          <div style="box-shadow: 0 0 30px 0 rgb(115 77 191 / 20%);border-radius: 7px;margin: 15px;height:calc(100% - 130px);padding: 8px;">
            <router-view :key="pageId" >

            </router-view>
          </div>


        </el-main>

      </el-container>

    </el-container>

    <el-dialog v-model="dialogEditVisible" width="450px" draggable title="新建分组">
      <el-form ref="editFormRef" :model="form" :rules="rules">
        <el-form-item label="分组名称" label-width="80" required>
          <input type="hidden" v-model="form.is_group">
          <el-input v-model="form.page_name" autocomplete="off" style="width: 300px"/>
        </el-form-item>
        <el-form-item label="选择分组" label-width="80">
          <el-select v-model="form.pid" placeholder="选择父级分组"  style="width: 300px">
            <el-option  label="请选择父级分组" value="0"/>
            <el-option
                v-for="item in treeData"
                :key="item.id"
                :label="item.label"
                :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取消</el-button>
        <el-button type="primary" @click="submitPageEdit">
          确认
        </el-button>
      </span>
      </template>
    </el-dialog>

  </div>


</template>

<!--<script setup>-->
<script setup>
// import appContent from './AppContent'
import {reactive, ref, getCurrentInstance } from "vue";
import {watch,onMounted,onBeforeMount} from "@vue/runtime-core";
import { Wechat } from '@/assets/icons'
import { useRouter  } from 'vue-router'

// import Router from 'vue-router'


// import tool from "@/utils/tool";

// console.log(props)

// const value = ref('')



let treeData = ref([])
const filterText = ref('')
const treeRef = ref(null)
const editFormRef = ref(null)
const dialogEditVisible = ref(false)
const appId  = ref('')
const defaultSelectKey  = ref(['B64CC4F8-04E5-FBC4-86C8-20A7B6FC0CA5'])
const pageId = ref('')
const tabsModel = ref('preview')
const form = reactive({
  page_name: '',
  pid : '0',
  is_group: 1,
  app_id  : appId
})
const rules = reactive({
  name: [
    {required: true, message: '请输入分组名称'}
  ],
  code: [
    {required: true, message: '请输入短信验证码'}
  ]
})

const crt = getCurrentInstance()?.appContext.config.globalProperties;

const $route = crt.$route;
const $router = crt.$router;
const $router2 = reactive(new useRouter());

console.log('crt==========', crt)


const handleClick = (tab) => {
  $router2.push({
    path: `/APP_${appId.value}/PAGE_${pageId.value}/${tab.paneName}`
  });
}



//打开表单设计页面
const openEditPage = () => {
  let path = tabsModel.value==='preview'?`/APP_${appId.value}/PAGE_${pageId.value}/form-design`:`/APP_${appId.value}/PAGE_${pageId.value}/flow-design`;
  if (tabsModel.value === 'data') path =`/APP_${appId.value}/PAGE_${pageId.value}/form-data`
  const routeUrl = $router.resolve({
    path: path,
    //query: { id: 96 },
  });
  window.open(routeUrl.href, "_blank");
}
//打开表单设计页面
const openEditPage2 = () => {
  const path =`/APP_${appId.value}/PAGE_${pageId.value}/view`
  const routeUrl = $router.resolve({
    path: path,
    //query: { id: 96 },
  });
  window.open(routeUrl.href, "_blank");
}



const submitPageEdit = async () => {
  console.log('submit')
  var validate = editFormRef.value.validateField("form.name").catch(() => {})
  console.log(validate)
  if (!validate) { return false; }

  const user = await crt.$http.pages.save.post(form)
  console.log(user)
  console.log(user)
  if (user.code === 0) {
    crt.$message.success(user.msg??'保存成功!')
  } else {
    crt.$message.error(user.msg)
    return false
  }
  //this.$message.success("Login Success 登录成功")
}




onBeforeMount(()=>{
  console.log('onBeforeMount',)
  console.log('$route:', $route);
  console.log('$router:', $router);
  console.log('$router_params:', $router.currentRoute.value.params);
  //crt.$router.currentRoute.value.meta.range2

  appId.value = $router.currentRoute.value.params.appId
  pageId.value = $router.currentRoute.value.params.pageId
  console.log('pageId',pageId.value)
  getPageList(appId)


  const path = $route.path?.split('/');
  const cars = ['preview','flow','data','event','config']
  for (var i=0;i<cars.length;i++) {
    if(cars[i], path.indexOf(cars[i]) !== -1) {
      tabsModel.value = cars[i]; return
    }
  }
})


async function getPageList(appId) {
  const tmpData =reactive({
    app_id: appId,
    page_id: (pageId.value!==undefined?pageId:''),
  })
  const user = await crt.$http.pages.getList.post(tmpData)
  console.log(user)
  console.log(user)
  if (user.code === 200) {
    //crt.$message.success(user.msg)
    treeData.value = user.data
    if (pageId.value===undefined && user.extra.page_id)  {
      pageId.value = user.extra.page_id
      console.log('defaultSelectKey',defaultSelectKey)
    }
    defaultSelectKey.value.push(pageId.value)
  } else {
    crt.$message.error(user.msg)
    return false
  }
}

onMounted(() => {
  //console.log('onMounted',this.$router.params)
})



watch(filterText, (newValue, oldValue) => {
  treeRef.value.filter(newValue);
  console.log('watch 已触发', newValue,oldValue)
})

watch(
    () =>$router2,
    (newValue,oldValue) => {
      console.log('watch 已触发2', newValue,oldValue)
      //emits("getContent", myValue.value)
    }
)

//解决vue-router重复点击报错问题（this.$router.replace()）
// const originalPush = Router.prototype.replace;
// Router.prototype.replace = function replace(location) {
//   return originalPush.call(this, location).catch(err => err);
// };

//解决vue-router重复点击报错问题（this.$router.push()）
const openPageDetail = (page_Id) => {
  const tempTime = +new Date() + ((Math.random() * 1000).toFixed(0) + "")
  console.log(page_Id,tempTime)

  let range2 = crt.$router.currentRoute.value.meta.range2
  console.log(range2,'range2')
  let rangeFile = '';
  if (range2 === undefined){
     rangeFile = 2;
     range2 = 2
  }else{
     range2 = undefined
  }

  let range = crt.$router.currentRoute.value.meta.range
  range = !range
  console.log('range----',rangeFile)
  console.log('range----',range)
  console.log(`@/views/app/AppPreview${range?2:''}.vue`)


  $router2.addRoute('page',{
    path: `preview_${tempTime}`,
    name: `AppPreview`,
    meta:{range:range,range2:range2},
    component: () => import(`@/views/app/AppPreview${range?2:''}.vue`),
  });

  $router2.push({
    path: `/APP_${appId.value}/PAGE_${page_Id}/preview_${tempTime}`
  });
  pageId.value = page_Id
  tabsModel.value = 'preview'

}

//显示节点tree
const renderContent = (h, { node, data, store }) => {
  console.log(store)
  console.log('=============node', pageId)
  console.log('=============data', data)
  const $elIcon = data.is_group === '1' ? <el-icon size="25"><FolderOpened /></el-icon> : null;

  //const $elIcon =  <el-icon><FolderOpened /></el-icon>;
  return (
      <el-row class="row-bg" justify="space-between" style="width:100%" onClick={event => {
        if (data.is_group !== '1') openPageDetail(data.page_id);
        event.stopPropagation()
      }}>
        <div class="label">
          {$elIcon}
          <el-button link>{data.label}</el-button>
        </div>
        <div>
          <el-button link on-click={ () => this.remove(node, data) }><el-icon size="20"><Rank /></el-icon></el-button>
          <el-button link style="margin-left:0" on-click={ () => this.remove(node, data) }><el-icon size="20"><MoreFilled /></el-icon></el-button>
        </div>
      </el-row>
  );
}

//对树节点进行筛选操作
const filterNode = (value, data) => {
  if (!value) return true;
  return data.label.indexOf(value) !== -1;
}

</script>

<style lang="less">
 .node_tree {
   .el-tree-node__content {
     height: 40px;line-height: 40px;

     .label .el-icon {
       position: relative;
        top: 6px;
     }
   }
 }
 .el-tabs__nav-wrap::after{height: 0}
</style>
