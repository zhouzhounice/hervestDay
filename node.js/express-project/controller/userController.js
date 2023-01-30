const { User } = require('../model/index')

exports.register = async (req,res) =>{
  console.log(req.body)
  const UserModel = new User(req.body);
  const dbBack = await UserModel.save();
  res.status(201).json(dbBack)
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