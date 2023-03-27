import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import api from './api'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


const app = createApp(App).use(router).use(ElementPlus,{locale: zhCn})

// 全局注册 icon
import * as ElIcon from '@element-plus/icons-vue' //引入icon
Object.keys(ElIcon).forEach((key) => {
    app.component(key, ElIcon[key])
})

app.config.globalProperties.$http = api
app.config.globalProperties.$router = router


app.mount('#app')

//createApp(App).use(router).use(ElementPlus).mount('#app')
