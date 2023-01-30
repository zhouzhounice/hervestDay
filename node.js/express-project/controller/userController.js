const { User } = require('../model/index')

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
  const userDb = await User.findOne(req.body);

  // 连接数据库查询

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