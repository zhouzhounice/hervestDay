<template>
  <div class="app_preview">
    <el-row v-if="formConfig" class="center_components" :class="formConfig.layoutType"  :gutter="formConfig.gutter" style="height: calc(100% - 51px);margin: 0;
            display: block;padding: 15px">
      <el-form ref="form" style="height: 100%"
                   class="component_form"
                   :model="formModel"
                   :size="formConfig.size"
                   :label-position="formConfig.labelPosition"
                   :label-width="`${formConfig.labelWidth}px`"
                   :style="{padding:`${formConfig.padding}px`}"
          >
            <form-design-item class="item" v-for="item in rightComponents"
                              :key="item.id"
                              :current-item="item"
                              :right-list="rightComponents"
                              :active-item-id="''"
                              :formConfig="formConfig"
                              @toChange="onChange"
            >
            </form-design-item>

          </el-form>
    </el-row>

    <div style="text-align: center">
      <el-button type="primary" :icon="ArrowLeft">清空</el-button>
      <el-button type="primary">
        提交
      </el-button>
    </div>

     <el-empty v-if="!rightComponents">
      <el-button type="primary" @click="openEditPage">编辑页面</el-button>
     </el-empty>


  </div>
</template>

<script setup>
import formDesignItem from "@/views/form-design/formDesignItem";
import {onBeforeMount, watch} from "@vue/runtime-core";
import {useRouter} from "vue-router/dist/vue-router";
import {getCurrentInstance, reactive, ref} from "vue";


window.onhashchange=function(event){
  console.log('事件====',event);
}
//或者
window.addEventListener('hashchange',function(event){
  console.log('事件2', event);
})

// import {ref} from "vue";
const props = defineProps({
  formConfig: {
    type: Object,
    default: null,
  },
  rightComponents: {
    type: Object,
    default: null,
  },
})
console.log(props)
const formModel = ref()
const appId  = ref('')
const pageId = ref('')
const formConfig = ref(props.formConfig)
const rightComponents = ref(props.rightComponents)

const crt = getCurrentInstance()?.appContext.config.globalProperties;
console.log('crt==========', crt)
const $router = useRouter();


onBeforeMount(()=>{
  console.log('onBeforeMount',)
  console.log('$router:', $router.currentRoute.value.params);
  console.log('$router:', $router.currentRoute.value.params.pageId);
  appId.value = $router.currentRoute.value.params.appId
  pageId.value = $router.currentRoute.value.params.pageId
  getElementList()
})


//打开表单设计页面
const openEditPage = () => {
  const routeUrl = $router.resolve({
    path: `/APP_${appId.value}/PAGE_${pageId.value}/design`,
    //query: { id: 96 },
  });
  window.open(routeUrl.href, "_blank");
}


async function getElementList() {
  const tmpData =reactive({
    app_id: appId,
    page_id: (pageId.value!==undefined?pageId:''),
  })
  const user = await crt.$http.pages.getElementList.post(tmpData)
  console.log(user)
  if (user.code === 200) {
    formConfig.value = user.data.formConfig
    rightComponents.value = user.data.components
    if (pageId.value===undefined && user.extra.page_id)  {
      pageId.value = user.extra.page_id
    }
  } else {
    crt.$message.error(user.msg)
    return false
  }
}

watch(pageId, (newValue, oldValue) => {
  console.log('watch 已触发', newValue,oldValue)
})
watch(
    () =>$router,
    (newValue,oldValue) => {
      console.log('watch 已触发2', newValue,oldValue)
      //emits("getContent", myValue.value)
    }
)

// watch(
//     () => props.formConfig,
//     () => {
//       AppList.value = props.list
//       //emits("getContent", myValue.value)
//     }
//)

</script>

<style>
.toolBar {display: none}
</style>
