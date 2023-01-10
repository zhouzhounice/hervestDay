import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';
import Home from '../pages/home.vue';
import About from '../pages/about.vue';
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
  }
]

const router:Router = createRouter({
  history:createWebHashHistory(),
  routes
});

export default router