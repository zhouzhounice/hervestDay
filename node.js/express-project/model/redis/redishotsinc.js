const { redis } = require('./index');

exports.hotInc = async (videoId,incNum) =>{
  var data = await redis.zscore("videohosts",videoId);
  let inc;
  if(data){
    inc = await redis.zincrby('videohosts',incNum,videoId)
  }else{
    inc =  await redis.zadd('videohosts',incNum,videoId)
  }
  return inc
}