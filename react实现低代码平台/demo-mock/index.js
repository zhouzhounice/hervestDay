const Koa = require('koa');
const Router = require('koa-router');
const mockList = require('./mock/index');

const app = new Koa();
const router = new Router()
// console.log(mockList)

async function getRes(fn,ctx) {
    return new Promise(resolve => {
        setTimeout(()=>{
            const res = fn(ctx)
            resolve(res)
        },1000)
    })
}
mockList.forEach(item=>{
    const {url,method,response} = item
    router[method](url,async ctx =>{
        ctx.body = await getRes(response,ctx)
    })
})

// 中间件示例：处理 HTTP  请求
app.use(router.routes());

// 启动服务器并监听端口
const port = 3001; // 你可以选择任何可用的端口
app.listen(port, () => {
    console.log(`Koa server is running on port ${port}`);
});
