#!/usr/bin/env node
const lib = require("fivst-cli-lib");
console.log(lib);
// 注册一个命名 imooc-test init
const argv = require('process').argv;
const command = argv[2]
console.log(command)
if(command){
  if(lib[command]){
    lib[command]();
  }else{
    console.log('无效的命令')
  }
}else{
  console.log('请输入命令')
}
// 实现参数解析 --version 和 init --name