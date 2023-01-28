const express = require('express');
const db = require('./db')

const app = express();
// 接受客户端发送的不同格式的数据
// app.use(express.urlencoded());
app.use(express.json());

app.get('/',async function(req,res){
  try{
    let back = await db.getDb();
    res.send(back.users)
  } catch(error){
    res.status(500).json({})
  }
});
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

app.listen(3031,()=>{
  console.log('http://127.0.0.1:3031');
})