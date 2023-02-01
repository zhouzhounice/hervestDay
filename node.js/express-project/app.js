const express = require('express');
const app = express();
const m = require('morgan');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./router');
// 解析客户端发送的json格式的请求
app.use(express.json());
app.use(express.urlencoded());

// 解决跨域问题
app.use(cors());

// 解决日志记录
app.use(morgan('dev'));

// 加载路由
app.use('/api',router);

// 处理静态资源文件
app.use(express.static('public'))

const PORT = process.env.PORT || 3031;
app.listen(PORT,()=>{
  console.log(`http://127.0.0.1:${PORT}`);
})