#! /usr/bin/env node

// console.log('myCli')

// 与命令行做交互
// console.log(process.argv[2])
// const str = process.argv[2]
// if(str==='--help'){
//   console.log('获取到命令参数')
// }

const { program } = require('commander');
const { myHelp } = require('../lib/core/help');
const { myCommander } = require('../lib/core/create')
// 设置一个指令参数
myHelp(program)
// 设置一个创建脚手架的命令
myCommander(program)


program.parse(process.argv)