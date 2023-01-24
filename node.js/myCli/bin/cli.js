#! /usr/bin/env node

// console.log('myCli')

// 与命令行做交互
// console.log(process.argv[2])
// const str = process.argv[2]
// if(str==='--help'){
//   console.log('获取到命令参数')
// }

import { program } from 'commander';
import myHelp  from '../lib/core/help.js';
import  myCommander  from '../lib/core/create.js';
// 设置一个指令参数
myHelp(program)
// 设置一个创建脚手架的命令
myCommander(program)


program.parse(process.argv)