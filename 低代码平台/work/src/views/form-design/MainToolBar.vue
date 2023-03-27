<template>
  <div class="main_tool_bar">


    <el-row class="page_main_tool" type="flex" justify="space-between"  align="bottom" style="border-bottom:1px solid #E4E7ED;padding: 0 10px">
    <div class="btn_groups left" style="line-height: 40px;">
      <el-button link circle ><el-icon size="22"><RefreshLeft /></el-icon></el-button>
      <el-button link circle ><el-icon size="22"><RefreshRight /></el-icon></el-button>
      <el-divider direction="vertical"></el-divider>

      <el-button link :class="formConfig.layoutType===item.name?'active':''" v-for="(item,index) in layoutType" :key="index"
           @click="formConf.layoutType=item.name">
        <el-icon size="22" class="layout_type"><component :is="item.icon"></component></el-icon>
      </el-button>


    </div>
    <div class="btn_groups" style="line-height: 40px;">
      <el-button type="primary" link  @click="tooBarHandleClick('preview')">
        <el-icon class=""><VideoPlay /></el-icon>预览</el-button>
      <el-button type="primary" link @click="tooBarHandleClick('save')"> 保存</el-button>
      <el-button type="primary" link @click="tooBarHandleClick('json')">查看JSON</el-button>
      <el-button type="primary" link >
        <el-icon class=""><View /></el-icon>查看Conf
      </el-button>
      <el-button type="danger" link style="" @click="tooBarHandleClick('clear')">
        <el-icon class=""><Delete /></el-icon>清空
      </el-button>
    </div>
  </el-row>


    <el-drawer style="border-top-left-radius: 15px;border-top-right-radius: 15px"
        v-model="previewDrawer"
        size="85%"
        title="I am the title"
        direction="btt"
        :show-close="false"
    >
      <template #header="{ titleId }">
        <el-row :id="titleId" class="row-bg" justify="space-between">
          <el-col :span="8"><h3>页面预览</h3></el-col>
          <el-col :span="8" style="text-align: center">
            <el-button link :class="formConfig.layoutType===item.name?'active':''" v-for="(item,index) in layoutType" :key="index"
                       @click="formConf.layoutType=item.name">
              <el-icon size="22" class="layout_type"><component :is="item.icon"></component></el-icon>
            </el-button>
          </el-col>
          <el-col :span="8" style="text-align: right">
            <el-button type="primary" link  @click="preview">
              <el-icon class=""><VideoPlay /></el-icon>访问</el-button>
            <el-button type="primary" link > 刷新</el-button>
            <el-button type="primary" link >新窗口打开</el-button>
            <el-button type="primary" link >
              <el-icon class=""><View /></el-icon>移动端打开</el-button>
            <el-button type="danger" link style="" @click="previewDrawer = false">
              <el-icon class=""><CloseBold /></el-icon>关闭
            </el-button>
          </el-col>
        </el-row>
      </template>
      <form-preview :rightComponents="rightComponents" :formConfig="formConfig"></form-preview>
    </el-drawer>

    <el-dialog class="preview_json_model"
        v-model="previewJsonModel"
        draggable
        title="查看Json"
        width="70%"
    >
      <el-tabs type="border-card" @tab-change="handleClick">
        <el-tab-pane label="Components" style="padding: 0">

        </el-tab-pane>
        <el-tab-pane label="FormConfig"></el-tab-pane>
        <el-tab-pane label="ActiveComp"></el-tab-pane>
        <div>
          <BxCodeEditor v-if="showJsonIndex===0" :value="json" :readonly="true" />
          <BxCodeEditor v-if="showJsonIndex===1" :value="json2" :readonly="true" />
          <BxCodeEditor v-if="showJsonIndex===2" :value="json3" :readonly="true" />
        </div>
      </el-tabs>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="previewJsonModel = false">Cancel</el-button>
          <el-button type="primary" @click="previewJsonModel = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>


  </div>
</template>

<script>
import formPreview from "@/views/form-design/formPreview";
import BxCodeEditor from "@/components/BxCodeEditor";
import {CloseBold} from "@element-plus/icons-vue";


export default {
  name: "MainToolBar",
  components: {
    CloseBold,
    formPreview, BxCodeEditor
  },

  props: [
    'pageId',
    'formConfig',
    'rightList',
    'activeItem'
  ],
  data () {
    return {
      myPageId : this.pageId,
      formConf: this.formConfig,
      rightComponents: this.rightList,
      previewDrawer: false,
      previewJsonModel: false, //
      showJsonIndex: 0,        //TODO 处理查看JSON时 tab标签 codeEditor 不显示的问题
      json:'',json2:'',json3:'',

      layoutType: [
        {id:1, name:'pc', icon: 'Monitor'},
        {id:2, name:'mobile', icon: 'Iphone'},
        {id:3, name:'pad', icon: 'Cellphone'},
      ],
    }
  },
  created() {
    console.log(this.$router.currentRoute)
  },
  methods: {
    handleClick(tab) {
      this.showJsonIndex = tab*1
      console.log(tab)
    },
    tooBarHandleClick(command) {
      if (this.rightComponents.length === 0) {
        this.$message({message:"请先拖拽组件",type:'warning'});return;
      }
      if (command === 'preview') {
        this.previewDrawer = true
      }if (command === 'json') {
        this.previewJsonModel = true
        this.json  = JSON.stringify(this.rightComponents, null, 1);
        this.json2 = JSON.stringify(this.formConfig, null, 1);
        this.json3 = JSON.stringify(this.activeItem, null, 1);
      }if (command === 'clear') { //// 清空组件
        var that = this;
        this.$confirm('确定要清空所有组件吗？', '提示', { type: 'warning' }).then(
            () => {
              this.rightComponents = [];
              that.$emit('UpdateParentData', 'rightComponents', []);
            }
        )
      }if (command === 'save') {
        this.save()
      }
    },
    async save() {
      const form= {
        page_id: this.myPageId,
        formConfig: this.formConfig,
        components: this.rightList,
      }
      const user = await this.$http.pages.saveElement.post(form,{is_json:1})
      console.log(user)
    },

  }
}
</script>

<style>
  .preview_json_model .el-dialog__body .el-tabs__content {padding: 0}
</style>
