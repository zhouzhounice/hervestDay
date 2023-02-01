const {Video} = require("../model/index");

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

// 获取视频详情
exports.video = async (req,res) =>{
  console.log(req.params)
  const { id:videoId } = req.params;
  const videoInfo = await Video
                      .findById(videoId)
                      .populate('user','_id userName image')
  res.status(200).json(videoInfo)
}