const { Video, Videocomment } = require("../model/index");

exports.videolist = async (req,res)=>{
  let {pageNum=1,pageSize=10} = req.body
  let videoList = await Video.find()
                              .skip((pageNum - 1) * pageSize)
                              .limit(pageSize)
                              .sort({createAt:-1})
                              .populate('user','_id userName image'); // 关联查询用户信息
  // 获取信息总条数
  const videoListCount = await Video.countDocuments();
  res.status(200).json({videoList,videoListCount})
}


// 用户上传视频 将视频写入数据库
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

// 获取视频详情
exports.video = async (req,res) =>{
  console.log(req.params)
  const { id:videoId } = req.params;
  const videoInfo = await Video
                      .findById(videoId)
                      .populate('user','_id userName image')
  res.status(200).json(videoInfo)
}

// 用户评论功能
exports.comment = async (req,res) =>{
  const { id } = req.params
  const videoInfo = await Video.findById(id);
  if(!videoInfo) {
    return res.status(404).json({err:"视频不存在"})
  }

  const comment = await new Videocomment({
    content:req.body.content,
    user:req.user.userInfo._id,
    video:id
  }).save()
  videoInfo.commentCount++;
  await videoInfo.save();

  res.status(201).json(comment)
}

// 视频评论列表展示
exports.commentList = async (req,res) =>{
  const { id } = req.params;
  const {pageNum = 1,pageSize = 10} = req.body;
  const commentList =  await Videocomment
                      .find({video:id})
                      .skip((pageNum-1)*pageSize)
                      .limit(pageSize)
                      .populate('user',"_id userName image")
  const commentCount = await Videocomment.countDocuments({video:id})
  res.status(200).json({ ...commentList, commentCount })
}