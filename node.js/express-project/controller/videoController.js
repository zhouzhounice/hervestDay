const { Video, Videocomment,Like,Subscribe } = require("../model/index");

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
  
  let videoInfo = await Video
                      .findById(videoId)
                      .populate('user','_id userName image');
    videoInfo = videoInfo.toJSON();
    videoInfo.islike = false
    videoInfo.isdislike = false
  videoInfo.isSubscribe = false
  if(req.user.userInfo){
    const userId = req.user.userInfo._id;
    if(await Like.findOne({user:userId,video:videoId,like:1})){
      videoInfo.islike = true
    }
    if(await Like.findOne({user:userId,video:videoId,like:-1})){
      videoInfo.isdislike = true
    }
    if (await Subscribe.findOne({user:userId,channel:videoInfo.user._id})){
      videoInfo.isSubscribe = true
    }
  }
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

// 视频评论删除
exports.deleteComment = async (req,res) =>{
  const {id,commentId} = req.params;
  const videoInfo = await Video.findById(id);
  if(!videoInfo) {
    return res.status(404).json('视频不存在');
  }
  const commentInfo = await Videocomment.findById(commentId);
  if(!commentInfo){
    return res.status(404).json('评论不存在');
  }
  await commentInfo.remove();
  videoInfo.commentCount--;
  await videoInfo.save();
  res.status(200).json('删除成功！')
}

// 喜欢某视频
exports.likeVideo = async(req,res) =>{
  const { id } = req.params;
  const {_id:userId } = req.user.userInfo
  const videoInfo =await Video.findById(id);

  if(!videoInfo){
    return res.status(404).json('视频不存在');
  }
  let isLike = true;
  let doc =await Like.findOne({
    user:userId,
    video:id
  })
  if(doc && doc.like === 1){
    await doc.remove()
    isLike = false
  }else if(doc && doc.like === -1){
    doc.like = 1;
    await doc.save()
  }else {
    await new Like({
      user:userId,
      video:id,
      like:1
    }).save()
  }
  console.log(videoInfo.save);
  videoInfo.likeCount = await Like.countDocuments({
    video:id,
    like:1
  });
  videoInfo.disLikeCount = await Like.countDocuments({
    video:id,
    like:-1
  });
  await videoInfo.save();
  res.status(200).json({
    ...videoInfo.toJSON(),
    isLike
  })
}

// 不喜欢某视频
exports.dislikeVideo = async(req,res) =>{
  const { id } = req.params;
  const {_id:userId } = req.user.userInfo
  const videoInfo =await Video.findById(id);

  if(!videoInfo){
    return res.status(404).json('视频不存在');
  }
  let isdisLike = true;
  let doc =await Like.findOne({
    user:userId,
    video:id
  })
  if(doc && doc.like === -1){
    await doc.remove()
  }else if(doc && doc.like === 1){
    doc.like = -1;
    await doc.save()
    isdisLike = false

  }else {
    await new Like({
      user:userId,
      video:id,
      like:-1
    }).save()
    isdisLike = false
  }
  videoInfo.likeCount = await Like.countDocuments({
    video:id,
    like:1
  });
  videoInfo.disLikeCount = await Like.countDocuments({
    video:id,
    like:-1
  });
  await videoInfo.save();
  res.status(200).json({
    ...videoInfo.toJSON(),
    isdisLike
  })
}

// 获取喜欢视频的列表
exports.likeList = async(req,res)=>{
  const {pageNum=1,pageSize=3} = req.body;
  var likes = await Like.find({
    like:1,
    user:req.user.userInfo._id
  }).skip((pageNum-1)*pageSize)
  .limit(pageSize)
  .populate('video','_id title videoId user');

  var likeCount = await Like.countDocuments({
    like: 1,
    user: req.user.userInfo._id
  })

  res.status(200).json({...likes,likeCount})
}