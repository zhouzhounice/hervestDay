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
            >
              <el-form-item label="">
                <el-input v-model="FormLabel.name"  placeholder="username" :prefix-icon="User"/>
              </el-form-item>
              <el-form-item label="">
                <el-input
                    v-model="FormLabel.possword"
                    placeholder="possword"
                    :prefix-icon="Lock"
                    type="password"
                    show-password
                />
              </el-form-item>
              <el-form-item label="">
                <el-input
                    v-model="FormLabel.posswordAgain"
                    placeholder="possword Again"
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
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
const router = useRouter()

const FormLabel = reactive({
  name: '',
  possword: '',
})

const Register = ()=>{
  console.log(FormLabel)

}
</script>

<script>

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