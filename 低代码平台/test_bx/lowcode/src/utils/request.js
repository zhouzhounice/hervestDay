import axios from 'axios';

let instance = axios.create({
    baseURL:'',
    timeout:15000
})

// 请求拦截器
instance.interceptors.request.use(
    req=>{
        console.log("请求拦截器成功的回调",req)
    },
    error => {
        console.log("请求拦截器失败的回调",error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    req =>{
        console.log("响应拦截器成功的回调",req)
    },
    error => {
        console.log("响应拦截器失败的回调",error)
    }
)

export  default  axios