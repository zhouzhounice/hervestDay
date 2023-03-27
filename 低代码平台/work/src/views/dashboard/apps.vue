<template>

  <el-card class="box-card" style="width: 650px;margin: 15px auto;" :body-style="{padding:'10px 10px'}">
    <template #header>
      <div class="f-header" style="display: flex;
    justify-content: space-between;
    align-items: center;line-height: 40px;height: 40px">
        <span><el-icon size="30" style="top: 8px"><Paopao /></el-icon>应用列表</span>
        <el-button type="primary"  circle @click="dialogEditVisible=true">
          <el-icon  style="top: 0px"><CirclePlus /></el-icon>
        </el-button>
      </div>
    </template>
    <div class="f-cards" style="">
      <div class="f-card app-item" v-for="item in appList" :key="item.id" style="">
        <router-link :to="`/APP_${item.app_id}`" >
          <img src="../../assets/img/xiangji.png" class="image" style="width: 100%"/>
          <p >{{item.app_name}}</p>
        </router-link>
      </div>
    </div>



    <el-dialog v-model="dialogEditVisible" width="450px" draggable title="新建应用">
      <el-form ref="editFormRef" :model="form" :rules="rules">
        <el-form-item label="分组名称" label-width="80" required>
          <input type="hidden" v-model="form.is_group">
          <el-input v-model="form.app_name" autocomplete="off" style="width: 300px"/>
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

  </el-card>

</template>

<script setup>
import { Paopao } from '@/assets/icons'
import {getCurrentInstance, reactive, ref} from "vue";
import {onBeforeMount} from "@vue/runtime-core";
import {useRouter} from "vue-router/dist/vue-router";
import {CirclePlus} from "@element-plus/icons-vue";


const appList = ref([])
const dialogEditVisible = ref(false)
const editFormRef = ref(null)

const form = reactive({
  app_name : '',
  is_group : 0,
  pid      : '0',
  app_id   : ''
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


const submitPageEdit = async () => {
  console.log('submit')
  var validate = editFormRef.value.validateField("form.app_name").catch(() => {})
  console.log(validate)
  if (!validate) { return false; }

  const user = await crt.$http.apps.save.post(form)
  console.log(user)
  console.log(user)
  if (user.code === 200) {
    crt.$message.success(user.msg??'保存成功!')
    dialogEditVisible.value = false;
    getAppList()
  } else {
    crt.$message.error(user.msg)
    return false
  }
  //this.$message.success("Login Success 登录成功")
}









onBeforeMount(()=>{
  console.log('onBeforeMount',)
  const $router = useRouter();
  console.log('$router:', $router.currentRoute.value.params);
  console.log('$router:', $router.currentRoute.value.params.appId);
  getAppList()
})




async function getAppList() {
  const tmpData =reactive({
    app_id: ''
  })
  const user = await crt.$http.apps.getList.post(tmpData)
  if (user.code === 200) {
    //crt.$message.success(user.msg)
    appList.value = user.data.rows
  } else {
    crt.$message.error(user.msg)
    return false
  }
}
</script>

<style lang="less">
.el-card__header {padding: 5px 15px}
.f-cards {
  display: flex;
  flex-wrap: wrap;

  .f-card {
    width: 77px;
    padding: 6px;
    margin: 6px;
    //box-shadow: var(--el-box-shadow-light);

    img {
      width: 100%;
    }
    p{font-size: 13px;text-align: center;white-space: pre;}
  }
}
</style>
