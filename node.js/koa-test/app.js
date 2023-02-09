const Koa = require('koa');
// const Router = require('@koa/router');
const router = require('./router');
const app = new Koa();
// const router = new Router();

app.use(router.routes())
// app.use(async ctx=>{
//   ctx.body = 'Hello koa'
// })

// app.use((ctx,next)=>{
//   console.log('one-1');
//   next();
//   console.log('one-2');
// });
// app.use((ctx,next)=>{
//   console.log('two-1');
//   next();
//   console.log('two-2');
// });
// app.use((ctx,next)=>{
//   console.log('three-1');
//   next();
//   console.log('three-2');
// });
// router.get();


app.listen(3001,()=>{
  console.log('http://127.0.0.1:3001')
})