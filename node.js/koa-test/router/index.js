const Router = require("@koa/router");
const router = new Router({prefix:'/api'});

router.get('/user',ctx=>{
  // 抛出错误
  // ctx.throw(400,'err')
  ctx.body = 'user'
})
router.post('/user',ctx=>{
  console.log(ctx.request.body)
})

router.get('/video',ctx=>{
  console.log(ctx.query)
  ctx.body = 'video'
})

module.exports= router