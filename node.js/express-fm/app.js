const express = require('express');
const db = require('./db')

const app = express();
const router = require("./router")
// const router = express.Router();

// 接受客户端发送的不同格式的数据
// app.use(express.urlencoded());
app.use(express.json());
app.use(router)
// 最基本的中间件
// app.use((req,res,next)=>{
//   console.log(`${req.method} - ${req.url} - ${Date.now()}`);
//   next()
// })

// app.use(router.get('/test1',(req,res)=>{
//   console.log(req.method);
//   res.send('/test')
// }))

// 路由中间件
// router.get('/test',(req,res)=>{
//   console.log(req.method);
//   res.send('/test')
// })

app.get('/',async function(req,res){
  try{
    let back = await db.getDb();
    res.send(back.users)
  } catch(error){
    res.status(500).json({})
  }
});

app.get('/test',function(req,res,next){
  console.log(req.method);
  next()
},function(req,res){
  console.log('666')
})

app.post('/',async function(req,res){
  let body = req.body;
  if(!body){
    res.status(403).json({
      error:'缺少用户信息'
    })
  }
  let back = await db.getDb();
  body.id = back.users.length +1;
  back.users.push(body)
  try {
    const w = await db.addserveDb(back)
    if(!w){
      res.status(200).send({
        msg:'添加成功！'
      })
    }
    
  } catch (error) {
    res.status(500).json({error})
  }
  console.log(req.body)
});
app.put('/:id',async (req,res)=>{
  const id =Number.parseInt(req.params.id);
  let userInfo = await db.getDb();
  let user = userInfo.users.find(item => item.id === id);
  if(!user){
    res.status(403).json({
      error:'用户不存在'
    })
  }
  userInfo.users[id-1] = {
    ...user,
    ...req.body
  }
  if(!await db.addserveDb(userInfo)){
    res.status(201).json({
      msg:'信息修改成功！'
    })
  }
})
app.listen(3031,()=>{
  console.log('http://127.0.0.1:3031');
})