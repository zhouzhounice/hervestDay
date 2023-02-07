// const { MongoClient } = require('mongodb');
// const client = new MongoClient('mongodb://127.0.0.1:27017');
// const main = async ()=>{
// await client.connect()
// const db =  client.db('mytest');
// const cc = db.collection('cc');
// var d = await cc.find()
// console.log(await d.toArray());
// }
// main().finally(()=>client.close()) // 断开连接

const Redis = require('ioredis');

const redis = new Redis();
redis.set("mykey","value");

console.log(redis.keys('*').then(res =>{
  console.log(res)
}))