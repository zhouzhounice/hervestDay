const { User } = require('../model/index');
const jwt = require("jsonwebtoken");
const { createToken } = require("../util/jwt")

// 用户注册
exports.register = async (req,res) =>{
  console.log(req.body);
  const UserModel = new User(req.body);
  const dbBack = await UserModel.save();
  const user = dbBack.toJSON()
  delete user.password
  res.status(201).json({user})
}

// 用户登陆
exports.login = async (req,res) =>{
  // 客户端数据验证
  console.log(req.body)
  let userDb = await User.findOne(req.body);
  if(!userDb){
    res.status(402).json({error:"邮箱或者密码不正确"})
  }
  // 连接数据库查询
  userDb = userDb.toJSON();
  userDb.token = await createToken(userDb);
  res.status(200).json(userDb)
}
exports.list = async (req,res)=>{
  console.log(req.method);
  // JSON.parse('(')
  res.send('/user-list')
}

exports.delete = async (req,res)=>{
  console.log(req.method);
  // JSON.parse('(')
  res.send('/user-list')
}