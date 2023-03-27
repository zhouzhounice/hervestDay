<template>
  <div class="right_config" style="padding: 0px">
    <el-tabs >
      <el-breadcrumb separator-class="el-icon-arrow-right" >
        <el-breadcrumb-item @click="$emit('activeForm')"><span @click="$emit('activeForm','form')" @click2="$emit('update:activeItemId', 'form')" >表单属性</span></el-breadcrumb-item>
        <el-breadcrumb-item>{{activeItemId !=='form'?activeItem.__config__.label:''}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-tab-pane label="属性" style="padding: 25px 10px 10px">

        <el-form v-if="activeItemId !== 'form' && activeThisItem " size="default" label-width="75px">
          <el-form-item v-if="activeThisItem.formId!==undefined" label="组件ID">
            <el-input  placeholder="组件ID" v-model="activeThisItem.formId" >
              <template #append> <el-icon class=""><Document /></el-icon> </template>
            </el-input>
          </el-form-item>
          <el-form-item v-if="activeThisItem.__config__.label!==undefined" label="标题">
            <el-input  placeholder="请输入标题" v-model="activeThisItem.__config__.label" />
          </el-form-item>
          <el-form-item v-if="activeThisItem.attrs.placeholder!==undefined" label="占位提示">
            <el-input  placeholder="请输入占位提示" v-model="activeThisItem.attrs.placeholder" />
          </el-form-item>
          <el-form-item v-if="activeThisItem.span!==undefined" label="栅格布局">
            <el-slider v-model="activeThisItem.span" :max="24" :min="1" :marks="{12:''}" style="min-width: 178px;margin-top: -5px;" />
          </el-form-item>
        </el-form>

        <el-form v-if="activeItemId === 'form'" :inline="true" size="default" label-width="75px">
          <el-form-item label="表单名">
            <el-input v-model="formConf.formRef" placeholder="请输入表单名（ref）" />
          </el-form-item>
          <el-form-item label="表单模型">
            <el-input v-model="formConf.formModel" placeholder="请输入数据模型" />
          </el-form-item>
          <el-form-item label="校验模型">
            <el-input v-model="formConf.formRules" placeholder="请输入校验模型" />
          </el-form-item>
          <el-form-item label="表单尺寸">
            <el-radio-group v-model="formConf.size">
              <el-radio-button label="large">较大</el-radio-button>
              <el-radio-button label="default">默认</el-radio-button>
              <el-radio-button label="small">较小</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="标签对齐">
            <el-radio-group v-model="formConf.labelPosition">
              <el-radio-button title="左对齐" label="left">left</el-radio-button>
              <el-radio-button title="右对齐" label="right">right</el-radio-button>
              <el-radio-button title="顶部对齐" label="top">top</el-radio-button>
              <el-radio-button title="不显示标签" label="none">不显示</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="标签宽度">
            <el-input v-model.number="formConf.labelWidth" type="number" placeholder="请输入标签宽度" />
          </el-form-item>
          <el-form-item label="栅格间隔">
            <el-input-number v-model="formConf.gutter" :min="0" placeholder="栅格间隔" />
          </el-form-item>
          <el-form-item label="禁用表单">
            <el-switch v-model="formConf.disabled" />
          </el-form-item>
          <el-form-item label="表单按钮">
            <el-switch v-model="formConf.formBtns" />
          </el-form-item>
          <el-form-item label="内外边距">
            <el-input-number v-model="formConf.padding" :min="0" placeholder="内边距" />
          </el-form-item>
          <el-form-item label="外边距">
            <el-input-number v-model="formConf.margin" :min="0" placeholder="外边距" />
          </el-form-item>

        </el-form>

      </el-tab-pane>

      <el-tab-pane label="样式">Config</el-tab-pane>
      <el-tab-pane label="高级">Role</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { defineComponent, toRefs, watch } from 'vue'
import {Document} from "@element-plus/icons-vue";

export default defineComponent({
  name: "RightConfig",
  components: {Document},
  props: {
    activeItem: {
      type: Object,
    },
    activeItemId: {
      type: String,
    },
    formConfig: {
      type: Object,
    },
  },
  setup(props, context) {
    console.log(context)
    // context作用是获取上下文对象，
    // 如果setup写法为setup(props, { emit })的方式的话，下面的context可以省略
    // const data = reactive({
    //    activeItem : props.ActiveCurrentItem
    // })
    const { formConfig,activeItem } = toRefs(props)
    const formConf = formConfig
    const activeThisItem = activeItem


    watch(
        () => props.activeItemId,
        (newValue, oldValue) => {
          console.log("----------1-------newValue",newValue, "oldvalue", oldValue);
        }
    );
    watch(
        () => props.activeItem,
        (newValue, oldValue) => {
          console.log("---------2--------newValue",newValue, "oldvalue", oldValue);
        }
    );

    return {
      formConf,
      activeThisItem
    }
    // return {
    //   ...toRefs(data)
    // }
  },
})
// watch(
//     () => props.listData,
//     (newProps) => {
//       childList.value = newProps.listData
//     }
// );
</script>

<style scoped>

</style>
