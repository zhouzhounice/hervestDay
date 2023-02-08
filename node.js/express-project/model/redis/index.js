const Redis = require('ioredis');
const redis = new Redis();

redis.on('err',err=>{
  if(err){
    console.log('redis链接错误');
    console.log(err);
    redis.quit()
  }
});

redis.on('ready',()=>{
  console.log('Redis链接成功');
})

exports.redis = redis