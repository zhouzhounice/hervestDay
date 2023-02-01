const {Video} = require("../model/index");

exports.list = async (req,res)=>{
  console.log(req.method);
  // JSON.parse('(')
  res.send('/video-list')
}


// 用户上传视频
exports.createvideo = async (req,res)=>{
  const id = req.user.userInfo._id;
  const videoModel = new Video({...req.body,user:id});
  try {
    const dbback = await videoModel.save();
    res.status(201).json({dbback});
  } catch (error) {
    res.status(500).json({err:error})
  }
  
}