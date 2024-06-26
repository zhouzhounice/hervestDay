const Koa = require('koa');
// const Router = require('@koa/router');
const router = require('./router');
const {koaBody} = require('koa-body');
const app = new Koa();
// const router = new Router();

app.use(koaBody())
app.use(router.routes());
// pages.use(async ctx=>{
//   ctx.body = 'Hello koa'
// })

// pages.use((ctx,next)=>{
//   console.log('one-1');
//   next();
//   console.log('one-2');
// });
// pages.use((ctx,next)=>{
//   console.log('two-1');
//   next();
//   console.log('two-2');
// });
// pages.use((ctx,next)=>{
//   console.log('three-1');
//   next();
//   console.log('three-2');
// });
// router.get();
app.on('error',(err,ctx)=>{
  console.log(err);
  ctx.body = err
})

app.listen(3001,()=>{
  console.log('http://127.0.0.1:3001')
})