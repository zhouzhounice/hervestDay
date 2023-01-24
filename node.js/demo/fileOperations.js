// 引入fs
var fs = require('fs');
// 读取文件
fs.readFile('./test.md','utf8',function(err,data){
  console.log(err)
  console.log(data)
})

// 文件写入 - 会将整个文件情况并且替换
fs.writeFile('./test.md','## 文件写入',function(err){
  console.log(err)
})

// 文件追加内容
fs.readFile('./test.md','utf8',function(err,data){
  if(!err){
    var newData = data + '8888';
    fs.writeFile('./test.md',newData,function(err){
      if(!err){
        console.log('追加成功')
      }
    })
  }
})