import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';
import Home from '../pages/home.vue';
import About from '../pages/about.vue';
import Echarts from '../pages/echarts.vue';


// import NProgress from 'nprogress' // progress bar

/* 
  - createRouter 新建路由实例
  - createWebHashHistory 配置内部使用hash模式的路由 也就是url会通过#区分
*/


const routes:Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
  {
    path:'/echarts',
    name:'echarts',
    component:Echarts
  },
]

const router:Router = createRouter({
  history:createWebHashHistory(),
  routes
});

// router.beforeEach(async (to, from, next) => {
//   // start progress bar
//   NProgress.start()
// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })

export default router