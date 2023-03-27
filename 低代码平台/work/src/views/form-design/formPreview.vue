<template>
  <el-container class="page_preview" style="text-align: left;display: block">

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
            <form-design-item class="item" v-for="item in rightComponents"
                              :key="item.id"
                              :current-item="item"
                              :right-list="rightComponents"
                              :active-item-id="activeItemId"
                              :formConfig="formConfig"
                              @toChange="onChange"
            >
            </form-design-item>

      </el-form>
    </el-row>

  </el-container>
</template>

<script>
import formDesignItem from "@/views/form-design/formDesignItem";
export default {
  name: "formPreview",
  components : {
    formDesignItem
  },
  props: [
    'rightComponents',
    'formConfig',
  ],
}
</script>

<style scoped>

</style>
