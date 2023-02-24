#!/usr/bin/env node
const lib = require("fivst-cli-lib");
// 注册一个命名 imooc-test init
const argv = require('process').argv;
const command = argv[2];

// 解构参数
const options = argv.slice(3);
let [option,param] = options;

option = option?.replace('--','');
if (options.length>1){


if(command){
  if(lib[command]){
    lib[command]({option,param});
  }else{
    console.log('无效的命令')
  }
}else{
  console.log('请输入命令')
}

}
// 实现参数解析 --version 和 init --name

if(command.startsWith('--')||command.startsWith('-')){
  const globalOption = command.replace(/--|-/g,'');
  if(globalOption ==='version' || globalOption ==='V'){
    console.log('1.0.0')
  }
}