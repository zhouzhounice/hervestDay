import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/index'
import formDesign from '@/views/form-design/formDesign.vue'
// import tool from "@/utils/tool";


var router =null;


//路由数组
const routes= [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
        path: '/',         //链接路径
        name: 'Index',     //路由名称，
        component: Index   //对应的组件模板
    },
    {                    //每一个链接都是一个对象
        path: '/form-design',         //链接路径
        name: 'formDesign',     //路由名称，
        component: formDesign   //对应的组件模板
    },
    {
        path: '/form',
        name: 'form',
        component: () => import('@/views/form-design/formDesign.vue')
    },
    {
        path: '/APP_:appId(.*)/PAGE_:pageId(.*)/form-design',
        name: 'form233',
        component: () => import('@/views/form-design/formDesign.vue')
    },
    {
        path: '/APP_:appId(.*)/PAGE_:pageId(.*)/flow-design',
        name: 'form234',
        component: () => import('@/views/flow-design/flowDesign.vue')
    },
    {
        path: '/APP_:appId(.*)/PAGE_:pageId(.*)/form-data',
        name: 'form235',
        component: () => import('@/views/app/AppData.vue')
    },
    {
        path: '/APP_:appId(.*)/PAGE_:pageId(.*)/view',
        name: 'form235',
        component: () => import('@/views/app/AppView.vue')
    },

    {
        path: '/APP_:appId(.*)',
        name: 'app',
        component: () => import('@/views/app/AppIndex.vue'),
        children: [
            {
                path: ':page(.*)?',
                component: () => {
                    const res = import('@/views/app/AppPreview.vue')
                    return  res
                }
            },
            {
                path: 'PAGE_:pageId(.*)',
                name: 'page',
                //component: () => import('@/views/app/AppPreview.vue'),
                children: [
                    {
                        path: ':path(.*)?',
                        name: 'AppPreview',
                        component: () => import('@/views/app/AppPreview.vue')
                    },
                    {
                        path: 'preview:temp(.*)?',
                        name: 'AppPreview2',
                        component: () => import('@/views/app/AppPreview.vue')
                    },{
                        path: 'flow',
                        name: 'AppFlow',
                        component: () => import('@/views/app/AppFlow.vue')
                    },{
                        path: 'data',
                        name: 'AppData',
                        component: () => import('@/views/app/AppData.vue')
                    },{
                        path: 'event',
                        name: 'appEvent',
                        component: () => import('@/views/app/AppEvent.vue')
                    },{
                        path: 'config',
                        name: 'AppConfig',
                        component: () => import('@/views/app/AppConfig.vue')
                    },{
                        path: 'design',
                        name: 'Design2',
                        transitionOnLoad: true,
                        component: () => import('@/views/form-design/formDesign.vue')
                    },

                ]
            }

        ]
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/app/index.vue')

    },
    {
        path: '/test2',
        name: 'test2',
        component: () => import('@/views/test/test2.vue')
    },

    //===========================
    {
        path: '/public/login',
        name: 'login',
        component: () => import('@/views/public/userLogin.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        children: [
            {
                path: ':page(.*)?',
                name: 'Dashboard3',
                component: () => {
                    const res = import('@/views/dashboard/console.vue')
                    return res
                }
            },
            {
                path: 'apps',
                name: 'DashboardApps',
                component: () => import('@/views/dashboard/apps.vue'),
            },
        ]
    }
]

// function getPreview() {
//     const items =['',1,2,3,4]
//     const range =  items[Math.floor(Math.random() * items.length)];
//     //const res = import(`@/views/app/AppPreview.vue`)
//     const component = `AppPreview${range}`
//     console.log('======component====',component)
//
//     console.log(loadComponent(component))
//     return loadComponent(component)
// }

// function loadComponent(component){
//     return  import(/* webpackChunkName: "[request]" */ `@/views/app/${component}`)
// }

//路由对象
router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    //history: createWebHashHistory(process.env.BASE_URL),
    routes //上面的路由数组
})
// const routerPush = router.prototype.push;
// router.prototype.push = function (location) {
//     return routerPush.call(this, location).catch(err => {err})
// };


/**
router.beforeEach(async (to, from, next) => {
    //NProgress.start()
    let token = tool.cookie.get("TOKEN");
    let isContinue= 0;
    console.log(to.path)
    if(to.path === "/public/login"){
        isContinue = 1;
    }

    if(!token && !isContinue){
        next({
            path: '/public/login'
        });
        return false;
    }else{
        next()
    }

})
 **/



//导出路由对象，在main.js中引用
export default router
