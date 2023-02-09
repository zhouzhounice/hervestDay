const Router = require("@koa/router");
const router = new Router({prefix:'/api'});

router.get('/user',ctx=>{
  ctx.body = 'user'
})

router.get('/video',ctx=>{
  ctx.body = 'video'
})

module.exports= router