<template>
  <div class="left_components" style="padding: 5px">
    <div class="clearfix">
      <span style="font-size: 20px">组件库</span>
      <el-button style="float: right;right: -5px;padding: 0;position: relative;top: 2px" link>
        <el-icon size="20" ><Flag /></el-icon>
        <el-icon size="20" @click="this.$emit('UpdateParentData','showLeftLiTabId',-1)"><CloseBold /></el-icon>
      </el-button>
    </div>
    <div v-for="(item,index) in leftComponents" :key="index">
      <h1>
        <el-divider>{{ item.name }}</el-divider>
      </h1>

      <div class="left_component_group">

        <draggable
            class="components-draggable"
            :list="item.list"
            :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
            :sort="false"
            :clone="cloneComponent"
            :item-key="getRandId"
            @end="onEnd"
        >
          <template #item="{ element }">
            <div class="component_item"  @click="addComponent(element)">
              <el-icon size="18"><component class="xxx" :is="element.__config__.tagIcon"></component></el-icon>
              <span>{{ element.__config__.label }}</span>
            </div>
          </template>

        </draggable>

      </div>
    </div>
  </div>

</template>

<script>
import draggable from 'vuedraggable'
import {inputComponents, selectComponents, layoutComponents} from './config'
export default {
  name: "LeftCompList",
  components: {
    draggable
  },
  data() {
    return  {
      globalId: 100,
      activeItemId: 'form',  //当前激活的组件Id, 默认为表单
      leftComponents: [
        {
          name: '输入型组件',
          list: inputComponents
        },
        {
          name: '选择型组件',
          list: selectComponents
        },
        {
          name: '布局型组件',
          list: layoutComponents
        }
      ],
    }
  },
  created() {
     this.$emit('UpdateParentData', 'activeItem', inputComponents[0]);  //初始化的时候设置默认值  以防右侧属性报错
  },
  methods: {
    cloneComponent(origin) {
      const tmpObj = JSON.parse(JSON.stringify(origin)); // 深拷贝
      console.log(tmpObj)
      tmpObj.formId = this.getAutoId(origin.__config__.tag, ++this.globalId)
      //this.activeItemId = tmpObj.formId
      this.$emit('UpdateParentData', 'tmpCompItemObj', tmpObj);
      //this.$emit('UpdateParentData', 'activeItemId', tmpObj.formId);

      return tmpObj
    },
    onEnd(obj) {
      if (obj.from !== obj.to) {
        //console.log('左边往右边拖动时的事件---', obj)
        this.$emit('DragEndEvent',obj)
      }
    },
    getRandId(data) {
      return data.__config__.label
      //console.log('data====',data)
    },
    getAutoId(tag) {
      return tag + this.globalId
    },




  }
}
</script>

<style scoped>

</style>
