// 1.导入http模块
var http = require('http');
var fs = require('fs');

// 2.创建服务器 
  // 2.1 创建服务器实例对象
  var server = http.createServer()

  // 2.2 监听服务器端口
  server.listen(3001,function(){
    console.log('http://127.0.0.1:3001')
  })

  // 2.3 监听服务端的事件
  server.on('request',function(req,res){
    // console.log('客户端接收到请求')
    // res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'});
    // res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    // 2.4 响应请求
    // res.write('<h3>返回请求结果</h3>');
    // 2.5 结束网络请求连接

    // 返回一个html文件
    console.log(req.url)
    if(req.url == '/'){
      fs.readFile('./index.html','utf-8',function(err,data){
        res.write(data);
        res.end();
      })
    }else{
      fs.readFile('./plmm.jpg',function(err,data){
        res.end(data);
      })
    }
  })
