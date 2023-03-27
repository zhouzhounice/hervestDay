<template>
    <div class="form-design">
      <el-container>

        <el-header class="padding0" style="border-bottom: 1px solid #E4E7ED;height: 50px;text-align: left">
          <img src="https://dev.baixincloud.cn/static/web/index/img/logo.png" alt="" width="140" style="margin-top: 4px">
        </el-header>

        <el-container>
        <!--左侧组件列表-->
          <el-aside width="300px" class="page_left" :class="showLeftLiTabId===-1?'no_main':''">
            <el-container>
              <el-aside width="50px" class="side-left" style="border-right: 1px solid #E4E7ED;">
                <ul style="text-align: center">
                  <li v-for="item in showLeftLiTabArr" :class="showLeftLiTabId===item.id?'active':''" :key="item.id" @click="showLeftClick(item.id)">
                    <el-icon size="30"><component class="xxx" :is="item.icon"></component></el-icon>
                  </li>
                </ul>
              </el-aside>
              <el-main class="padding0" v-if="showLeftLiTabId===0">
                <left-comp-list @UpdateParentData="UpdateThisData" @DragEndEvent="DragEndEvent"/>
              </el-main>

              <el-main class="left_components tree padding0"  v-if="showLeftLiTabId===1">
                <div class="clearfix">
                  <span style="font-size: 20px">组件大纲</span>
                  <el-button style="float: right;right: -5px;padding: 0;position: relative;top: 2px" link>
                    <el-icon size="20" ><Flag /></el-icon>
                    <el-icon size="20" @click="showLeftLiTabId=-1"><CloseBold /></el-icon>
                  </el-button>
                </div>
                <div class="component_tree">
                  <el-tree
                      :data="rightComponents"
                      node-key="id"
                      default-expand-all
                      draggable
                      :expand-on-click-node="false"
                      :render-content="renderContent">
                  </el-tree>
                </div>
              </el-main>



            </el-container>
          </el-aside>
        <!--左侧组件列表end-->

        <!--中间组件列表-->
          <el-main class="page_main padding0" style="border: 1px solid #ccc;border-top: 0;">
            <main-tool-bar :rightList="rightComponents" :formConfig="formConfig" :pageId="pageId"
                           :activeItem="activeItem" @UpdateParentData="UpdateThisData"></main-tool-bar>

            <el-row class="center_components" :class="formConfig.layoutType"  :gutter="formConfig.gutter" style="height: calc(100% - 51px);margin: 0;
            display: block;padding: 15px">
              <el-form ref="form" style="height: 100%"
                       class="component_form"
                       :model="formModel"
                       :class="activeItemId==='form'?'active':''"
                       :size="formConfig.size"
                       :inline="formConfig.inline"
                       :label-position="formConfig.labelPosition"
                       :label-width="`${formConfig.labelWidth}px`"
                       :style="{padding:`${formConfig.padding}px`}"
              >

                <draggable class="drawing-board" style="height: 100%;position: relative;"
                           :list="rightComponents"
                           @change="e=>dragEvent('onChange',e)"
                           @choose="e=>dragEvent('onChoose',e)"
                           @end="e=>dragEvent('onEnd',e)"
                           @update="e=>dragEvent('onUpdate',e)"
                           @sort="e=>dragEvent('onSort',e)"
                           @move="e=>dragEvent('onMove',e)"
                           ghostClass="ghost"
                           handle=".move"
                           fallbackClass="true"
                           chosenClass="chosen"
                           item-key="formId"
                           sort="true"
                           :animation="0"
                           :group="{
                              name: 'componentsGroup',
                              pull: false,
                         }"
                    >
                  <template #item="{ element }">
                      <form-design-item class="item"
                          :index="element.index"
                          :current-item="element"
                          :right-list="rightComponents"
                          :active-item-id="activeItemId"
                          :formConfig="formConfig"
                          @CallParentMethods="CallThisMethods"
                          @toChange="onChange"
                      >
                      </form-design-item>

                  </template>
                </draggable>

                <div v-show="!rightComponents.length" class="empty-info">
                  从左侧拖入或点选组件进行表单设计
                </div>

              </el-form>
            </el-row>

          </el-main>
        <!--中间组件列表end-->


        <!--右侧属性配置列表-->
          <el-aside width="350px" class="page_right">
            <right-config :active-item="activeItem" :form-config="formConfig" :active-item-id="activeItemId"/>
          </el-aside>
        <!--右侧属性配置列表end-->
        </el-container>

      </el-container>

    </div>
</template>

<script>
import draggable from 'vuedraggable'
import LeftCompList from "@/views/form-design/LeftCompList";
import formDesignItem from "@/views/form-design/formDesignItem";
import MainToolBar from "@/views/form-design/MainToolBar";
import RightConfig from "@/views/form-design/RightConfig";
import formPreview from "@/views/form-design/formPreview";
import { formConfig } from './config'
import {reactive} from "vue";
// import {ElLoading} from "element-plus";

//const loadingInstance = ElLoading.service({ fullscreen: true })


export default {
  name: "formDesign",
  components: {
    draggable,
    LeftCompList,MainToolBar,formDesignItem,formPreview,RightConfig
  },
  data() {
    return {
      appId: '',
      pageId:'',
      formConfig,
      showLeftLiTabId : 0,        //左侧tab标识 组件库 大纲  Js
      activeItemId: 'form',   //当前激活的组件Id, 默认为表单
      activeItem: { },         //当前激活的组件
      formModel: {},              // formModel
      previewDialogVisible: false,  //预览
      showLeftLiTabArr: [
        {id:0, icon:'Connection',isActive: true},
        {id:1, icon:'Odometer',isActive: false},
        {id:2, icon:'GoldMedal',isActive: false},
        {id:3, icon:'FirstAidKit',isActive: false},
        {id:4, icon:'Guide',isActive: false},
        {id:5, icon:'Warning',isActive: false},
      ],
      rightComponents: [],  //右侧组件列表
      tmpCompItemObj: {},  //临时组件对象  深拷贝之后的
    }
  },
  async getElementList(tmpData) {
    const tmpData2 = reactive({
      app_id: ''
    })
    console.log(tmpData2)
    const user = await this.$http.pages.getElementList.post(tmpData)
    if (user.code === 200) {
      //crt.$message.success(user.msg)

    } else {
      this.$message.error(user.msg)
      return false
    }
  },



  created() {
    console.log("路由参数",this.$route.params);
    // console.log('router==',this.appId = this.$router.currentRoute.value.params.appId)
    //console.log('router==',this.pageId = this.$router.currentRoute.value.params.pageId)
    const form = {
      app_id: this.appId?this.appId:this.$router.currentRoute.value.params.appId,
      page_id: this.pageId?this.pageId:this.$router.currentRoute.value.params.pageId,
    }
    var that = this;
    //const user = this.getElementList(form);// await this.$http.pages.saveElement.post(form,{is_json:1})
    const user = this.$http.pages.getElementList.post(form)
    console.log('-----user------', user)
    console.log('-----user------', user.code)
    if (user.code === 200) {
      that.rightComponents = user.data.components;
      that.formConfig = user.data.formConfig;

      console.log('==================',that.formConfig)
    }
    //loadingInstance.close()

  },
  methods: {
    showLeftClick(index) {
      this.showLeftLiTabId = index;
    },
    CallThisMethods(func, args) {
      console.log('调用父级func', func)
      const methods = this.$options.methods
      methods[func](this, args)
    },
    UpdateThisData(setKey, setValue) {
      console.log(setKey, setValue)
      if( this[setKey] ) this[setKey] = setValue
    },
    //拖动结束事件
    DragEndEvent(obj){
      console.log('左边往右边拖动时的事件3---', obj, this.tmpCompItemObj)
      this.activeItemId = this.tmpCompItemObj.formId
      this.activeItem = this.getActiveItem(this.activeItemId)
    },
    activeFormItem(currentItem) {
      console.log('currentItem----', currentItem)
      this.activeItem = currentItem
      this.activeItemId = this.activeItem.formId
    },
    dragEvent(eventName,event) {
      console.log('===========---', eventName,event)
      if (eventName==='onEnd') {
        if (event.from !== event.to) {
          console.log('左边往右边拖动时的事件2---', event)
        }
      }
    },
    getActiveItem (formId, rightComponents = this.rightComponents) {
      for(var i=0,len = rightComponents.length;i<len;i++){
        console.log('--------',formId,rightComponents[i].formId,rightComponents[i])
        if (rightComponents[i].formId === formId) return rightComponents[i]
        if (rightComponents[i].children) {
          return this.getActiveItem( formId, rightComponents[i].children )
        }
      }
    },
    //显示节点tree
    renderContent(h, { node, data, store }) {
      console.log(store)
      console.log('=============node', node)
      console.log('=============data', data)
      const itemClass = this.activeItem.formId === this.activeItemId ? 'custom-tree-node active' : 'custom-tree-node';
      return (
          <span class={itemClass}>
            <span class="label">{data.__config__.label}</span>
            <span style="float:right">
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
    },
    onChange(e) {
      console.log('onChange=========', e)
      if (e.added) {
        //从左边拖拽过来的元素
        //this.activeItem = e.added.element
        //this.activeItemId = e.added.element.formId
        //this.activeItem = this.getActiveItem(this.activeItemId)
        //this.activeItem =this.rightComponents[e.added.newIndex];// this.getActiveItem(this.activeItemId)
        //this.activeItemId = this.activeItem.formId

        console.log('toChange3=========', this.rightComponents)
      }
    },
  }
}
</script>

<style lang="less">
@import './formDesign'; // 导入相关样式;

</style>
