<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="75%" class="deepColor">Aside</el-aside>
      <el-main class="lightColor login-position">
        <div class="login-container">
          <div class="login-text">register</div>
          <div class="login-form">
            <el-form
                class="form-style"
                :model="FormLabel"
                :rules="FormRules"
            >
              <el-form-item prop="username">
                <el-input v-model="FormLabel.username"  placeholder="username" :prefix-icon="User"/>
              </el-form-item>
              <el-form-item prop="FormLabel.password">
                <el-input
                    v-model="FormLabel.password"
                    placeholder="password"
                    :prefix-icon="Lock"
                    type="password"
                    show-password
                />
              </el-form-item>
              <el-form-item label="">
                <el-input
                    v-model="FormLabel.passwordAgain"
                    placeholder="password Again"
                    :prefix-icon="Lock"
                    type="password"
                    show-password
                />
              </el-form-item>
              <el-form-item label="">
                <el-button type="primary" @click="Register" class="button-style">注册</el-button>
              </el-form-item>
            </el-form>
            <div>

            </div>
          </div>
          <div></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from "axios";
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
const router = useRouter()

// 表单字段
const FormLabel = reactive({
  username: '',
  password: '',
  passwordAgain:''
})
const FormRules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
 password:[
  {required: true, message: '请输入密码', trigger: 'blur'}
  ],
  passwordAgain:[
  {required: true, message: '请再次输入密码', trigger: 'blur'}
]
})
const Register = ()=>{
  const {username,password,passwordAgain} = FormLabel
  if(password !== passwordAgain){
    return   ElMessage({
      message: '两次输入的密码不一致！',
      type: 'warning',
    })
  }

  axios.post("/api/user/register",{
    username,
    password
  }).then(res =>{
    const {data:{data,status}} = res
    console.log(data,status)
    if(status.code === 200){
    return ElMessage({
        message: '注册成功！',
        type: 'success',
      })
    }
    ElMessage({
      message: status.message,
      type: 'warning',
    })
  }).catch(err =>{
    console.log(err)
  })
}
</script>


<style scoped>
.deepColor{
  background-color: #c6e2ff;
}
.lightColor{
  background-color: #ecf5ff;
}
.center {
  padding-top: 30px;
}
.common-layout {
  width: 100%;
  height: 100%;
  padding: 0 50px;
}

.container{
  width: 100%;
  height: 100%;
}
.login-position{
  position: relative;
}
.login-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 400px;
  border: 1px #000 solid;
  border-radius: 8px;
  background-color: #FFFFFF;
}
.login-text{
  height: 50px;
  border-bottom: 1px #6d737b solid;
  font-size: 32px;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
}
.login-form{
  position: relative;
  height: 75%;
  border-bottom: 1px #000000 solid;
}
.form-style{
  position: relative;
  top: 60px;
  left: 12px;
  width: 270px;
}
.button-style{
  width: 100%;
}
</style>