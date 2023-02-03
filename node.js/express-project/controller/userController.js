const fs = require('fs');
const { promisify } = require('util');
const { _:{pick} } = require("lodash");
const { User } = require('../model/index');
const { Subscribe } = require('../model/index');
const { createToken } = require("../util/jwt");
const { channel } = require('diagnostics_channel');

const rename = promisify(fs.rename);

// 用户注册
exports.register = async (req,res) =>{
  // console.log(req.body);
  const UserModel = new User(req.body);
  const dbBack = await UserModel.save();
  const user = dbBack.toJSON()
  delete user.password
  res.status(201).json({user})
}

// 用户登陆
exports.login = async (req,res) =>{
  // 客户端数据验证
  // console.log(req.body)
  let userDb = await User.findOne(req.body);
  if(!userDb){
    res.status(402).json({error:"邮箱或者密码不正确"})
  }
  // 连接数据库查询
  userDb = userDb.toJSON();
  userDb.token = await createToken(userDb);
  res.status(200).json(userDb)
}

// 用户的修改
exports.update = async (req,res) =>{
  const id = req.user.userInfo._id;
 const updateData =await User.findByIdAndUpdate(id,req.body,{new:true});
  res.status(202).json({user:updateData})
}
exports.list = async (req,res)=>{
  // console.log(req.user.userInfo);
  // JSON.parse('(')
  res.send('/user-list')
}

exports.delete = async (req,res)=>{
  console.log(req.method);
  // JSON.parse('(')
  res.send('/user-list')
}

// 用户上传头像
exports.headImg = async (req,res) =>{
  // console.log(req.file)
  const fileTextArr = req.file.originalname.split('.');
  const fileText = fileTextArr[fileTextArr.length-1];

  try {
   await rename(
    './public/'+req.file.filename,
    './public/'+req.file.filename+'.'+fileText
    );
    res.status(201).json({filepath:req.file.filename+'.'+fileText})
  } catch (error) {
    res.status(500).json({err:error})
  }
}

// 用户关注功能
exports.subscribe = async (req,res) =>{
  const id = req.user.userInfo._id;
  const channelId = req.params.userId;
  if(id === channelId){
  return res.status(401).json({err:'不能关注自己'}); 
  }
  // 判断之前是否关注过用户
  const record = await Subscribe.findOne({
    user: id,
    channel:channelId
  });
  console.log(record)
  if(!record){
    await new Subscribe({
      user: id,
      channel:channelId
    }).save()

   const user =  await User.findById(channelId);
   user.subscribeCount++
   await user.save();
   res.status(200).json({msg:"关注成功！"});
  }else{
    res.status(401).json({err:"已经订阅次频道了"})
  }  
}
// 用户取消关注功能
exports.unsubscribe = async (req,res) =>{
  const id = req.user.userInfo._id;
  const channelId = req.params.userId;
  if(id === channelId){
  return res.status(401).json({err:'不能取消关注自己'}); 
  }
  // 判断之前是否关注过用户
  const record = await Subscribe.findOne({
    user: id,
    channel:channelId
  });
  if(record){
    await record.remove();

   const user =  await User.findById(channelId);
   user.subscribeCount--
   await user.save();
   res.status(200).json(user);
  }else{
    res.status(401).json({err:"还未订阅此频道"})
  }  
}

// 查看频道详情
exports.getuser = async (req,res) =>{
  let isSubscribe = false;
  if(req.user){
    await Subscribe.findOne({
      channel:req.params.userId,
      user:req.user.userInfo._id
    })
    if(record){
      isSubscribe = true
    }
  }
  const user = await User.findById(req.params.userId)
  console.log(user)
  // user.isSubscribe = isSubscribe
  res.status(200).json({
    ...pick(user, ['_id', 'userName', 'image', 'subscribeCount', 'cover','channeldes']), isSubscribe
  })
}

// 获取关注列表与粉丝列表
exports.getsubscribe = async (req,res) =>{
  // 根据用户id查找
  let subscribeList = await Subscribe.find({
    user:req.params.userId
  }).populate('channel')
  subscribeList = subscribeList.map(item => {
    return pick(item.channel, ['_id', 'userName', 'image', 'subscribeCount', 'cover', 'channeldes'])
  })
  res.status(200).json(subscribeList)
}

// 获取粉丝列表
exports.getchannel = async (req,res) =>{
  let channelList = await Subscribe.find({
    user: req.user.userInfo._id
  }).populate('user')
  channelList = channelList.map(item => {
    return pick(item.user, ['_id', 'userName', 'image', 'subscribeCount', 'cover', 'channeldes'])
  })
  res.status(200).json(channelList)
}