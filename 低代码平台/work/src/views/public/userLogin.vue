<template>
  <div class="login_bg">
    <div class="login_adv" style="background-image: url(https://lolicode.gitee.io/scui-doc/demo/img/auth_banner.jpg);">
      <div class="login_adv__title">
        <h2>Bx_flow</h2>
        <h4>低代码开发平台- 面向数字化管理员的开发工具</h4>
        <p>5分钟完成应用搭建的零代码平台,无需一行代码搭建属于你的系统. 。</p>
        <div>
					<span><el-icon><ChromeFilled/></el-icon></span>
          <span><el-icon><Plus /></el-icon></span>
          <span><el-icon><ElemeFilled /></el-icon></span>
        </div>

      </div>


      <div style="width:80%;position: absolute;top: 30%;left: 50%;transform: translate(-50%, 0%);z-index: 9">
        <img src="https://element.eleme.cn/static/theme-index-blue.c38b733.png" alt="" style="width: 100%;">
      </div>
      <div class="login_adv__mask">

      </div>
      <div class="login_adv__bottom">
        © {{APP_NAME}}  v1.0.0
      </div>
    </div>
    <div class="login_main">
      <div class="login_config">
        <el-button circle type="info" @click="configDark"><el-icon><Sunny/></el-icon></el-button>
        <el-dropdown trigger="click" placement="bottom-end" @command="configLang">
          <el-button circle>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z" fill="currentColor"></path><path d="M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z" fill="currentColor"></path></svg>
          </el-button>
        </el-dropdown>
      </div>
      <div class="login-form">
        <div class="login-header">
          <div class="logo">
            <img  src="../../assets/img/logo_r.png">
            <label>{{APP_NAME}}</label>
          </div>
        </div>
        <el-tabs>
          <el-tab-pane label="账号登录" lazy>
            <password-form></password-form>
          </el-tab-pane>
          <el-tab-pane label="手机登录" lazy>
            <phone-form></phone-form>
          </el-tab-pane>
        </el-tabs>
        <template>
          <el-divider>其他登录方式</el-divider>
          <div class="login-oauth">
            <el-button type="success" icon="sc-icon-wechat" circle @click="wechatLogin"></el-button>
          </div>
        </template>
      </div>
    </div>
  </div>

</template>

<script>
import passwordForm from './passwordForm'
import phoneForm from './phoneForm'
import {Sunny} from "@element-plus/icons-vue";

export default {
  components: {
    Sunny,
    passwordForm,
    phoneForm
  },
  data() {
    return {
      APP_NAME: '百信云',
      WechatLoginCode: "",
      showWechatLogin: false,
      isWechatLoginResult: false
    }
  },
  watch:{

  },
  created: function() {
    console.log('%c 百信云 %c Gitee: https://baixincloud.cn/', 'background:#666;color:#fff;border-radius:5px;', '')
    console.info("%c由%c百信云%c驱动", `https://gitee.com/`)
  },
  methods: {
    configDark(){
      this.config.dark = this.config.dark ? false : true
    },
    configLang(command){
      this.config.lang = command.value
    },
    wechatLogin(){
      this.showWechatLogin = true
      this.WechatLoginCode = "BX-823677237287236-" + new Date().getTime()
      this.isWechatLoginResult = false
      setTimeout(()=>{
        this.isWechatLoginResult = true
      },3000)
    }
  }
}
</script>

<style scoped>
#app {width: 100%;height: 100%;box-sizing: border-box}
.login_bg {width: 100%;height: 100vh;background: #fff;display: flex;box-sizing: border-box}
.login_adv {width: 53.33333%;background-color: #555;background-size: cover;background-position: center center;background-repeat: no-repeat;position: relative;}
.login_adv__title {color: #fff;padding: 40px;position: absolute;top:0px;left:0px;right: 0px;z-index: 2;}
.login_adv__title h2 {font-size: 40px;}
.login_adv__title h4 {font-size: 18px;margin-top: 10px;font-weight: normal;}
.login_adv__title p {font-size: 14px;margin-top:10px;line-height: 1.8;color: rgba(255,255,255,0.6);}
.login_adv__title div {margin-top: 10px;display: flex;align-items: center;}
.login_adv__title div span {margin-right: 15px;}
.login_adv__title div i {font-size: 40px;}
.login_adv__title div i.add {font-size: 20px;color: rgba(255,255,255,0.6);}
.login_adv__bottom {position: absolute;left:0px;right: 0px;bottom: 0px;color: #fff;padding: 40px;background-image:linear-gradient(transparent, #000);z-index: 3;}
.login_adv__mask {position: absolute;top:0px;left:0px;right: 0px;bottom: 0px;background: rgba(0,0,0,0.5);z-index: 1;}

.login_main {flex: 1;overflow: auto;display:flex;}
.login-form {width: 400px;margin: auto;padding:20px 0;}
.login-header {margin-bottom: 40px;}
.login-header .logo {display: flex;align-items: center;}
.login-header .logo img {width: 40px;height: 40px;vertical-align: bottom;margin-right: 10px;}
.login-header .logo label {font-size: 26px;font-weight: bold;}
.login-oauth {display: flex;justify-content:space-around;}
.login-form .el-divider {margin-top:40px;}

.login-form {}
.login-form:deep(.el-tabs) .el-tabs__header {margin-bottom: 25px;}
.login-form:deep(.el-tabs) .el-tabs__header .el-tabs__item {font-size: 14px;}

.login-form:deep(.login-forgot) {text-align: right;}
.login-form:deep(.login-forgot) a {color: var(--el-color-primary);}
.login-form:deep(.login-forgot) a:hover {color: var(--el-color-primary-light-3);}
.login-form:deep(.login-reg) {font-size: 14px;color: var(--el-text-color-primary);}
.login-form:deep(.login-reg) a {color: var(--el-color-primary);}
.login-form:deep(.login-reg) a:hover {color: var(--el-color-primary-light-3);}

.login_config {position: absolute;top:20px;right: 20px;}

.login-form:deep(.login-msg-yzm) {display: flex;width: 100%;box-sizing: border-box}
.login-form:deep(.login-msg-yzm) .el-button {margin-left: 10px;--el-button-size:42px;}

.qrCodeLogin {text-align: center;position: relative;padding: 20px 0;}
.qrCodeLogin img.qrCode {background: #fff;padding:20px;border-radius:10px;}
.qrCodeLogin p.msg {margin-top: 15px;}
.qrCodeLogin .qrCodeLogin-result {position: absolute;top:0;left:0;right: 0;bottom: 0;text-align: center;background: var(--el-mask-color);}

@media (max-width: 1200px){
  .login-form {width: 340px;}
}
@media (max-width: 1000px){
  .login_main {display: block;}
  .login_main .login_config {position: static;padding:20px 20px 0 20px;text-align: right;}
  .login-form {width:100%;padding:20px 40px;box-sizing: border-box}
  .login_adv {display: none;}
}
</style>
