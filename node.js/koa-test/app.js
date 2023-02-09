const Koa = require('koa');
const app = new Koa();

app.use(async ctx=>{
  ctx.body = 'Hello koa'
})

app.listen(3001,()=>{
  console.log('http://127.0.0.1:3001')
})