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

exports.topHots = async (num) =>{
  const sort = await redis.zrevrange('videohosts',0,-1,"withscores");
  const newArr = sort.slice(0,num * 2)
  const obj = {}
  for(let i=0;i<newArr.length;i++){
    if(i%2===0){
      obj[newArr[i]] = newArr[i+1]
    }
  }
  return obj
}