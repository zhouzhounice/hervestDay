<template>
	<el-form ref="loginForm" :model="form" :rules="rules" label-width="0" size="large" @keyup.enter="login">
		<el-form-item prop="phone">
			<el-input v-model="form.mobile" prefix-icon="Iphone" clearable placeholder="请输入">
				<template #prepend>+86</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="yzm"  style="margin-bottom: 35px;">
			<div class="login-msg-yzm">
				<el-input v-model="form.code" prefix-icon="Unlock" clearable placeholder="短信验证码"></el-input>
				<el-button @click="getYzm" :disabled="disabled">获取验证码<span v-if="disabled"> ({{time}})</span></el-button>
			</div>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" style="width: 100%;" :loading="islogin" round @click="login">登录</el-button>
		</el-form-item>
		<div class="login-reg">
      还没有账号? <router-link to="/user_register">创建账号</router-link>
		</div>
	</el-form>
</template>

<script>
import tool from "@/utils/tool";
	export default {
		data() {
			return {
				form: {
					mobile: "",
					code: "",
				},
				rules: {
					mobile: [
						{required: true, message: '请输入手机号码'}
					],
					code: [
						{required: true, message: '请输入短信验证码'}
					]
				},
				disabled: false,
				time: 0,
				islogin: false,
			}
		},
		mounted() {

		},
		methods: {
			async getYzm(){
				var validate = await this.$refs.loginForm.validateField("mobile").catch(()=>{})
				if(!validate){ return false }

				this.$message.success('已发送短信至手机号码')
				this.disabled = true
				this.time = 60
				var t = setInterval(() => {
					this.time -= 1
					if(this.time < 1){
						clearInterval(t)
						this.disabled = false
						this.time = 0
					}
				},1000)
			},
			async login(){
        console.log( 'LOGIN')
				var validate = await this.$refs.loginForm.validate().catch(()=>{})
				if(!validate){ return false }

        var data = this.form
        //获取token
        var user = await this.$http.public.login.post(data)
        console.log(user)
        if(user.code === 0){
          tool.cookie.set("TOKEN", user.data.token, {
            //expires: this.form.autologin? 24*60*60 : 0
          })
          tool.data.set("USER_INFO", user.data.userInfo)
        }else{
          this.islogin = false
          this.$message.warning(user.msg)
          return false
        }
        this.$router.replace({
          path: '/dashboard'
        })
        this.$message.success("Login Success 登录成功")
        this.islogin = false

			}
		}
	}
</script>

<style>

</style>
